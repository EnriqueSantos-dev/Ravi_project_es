/*
  Warnings:

  - You are about to drop the `carderno` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `cliente_caderno_comprar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cardernoId` on the `cliente_caderno_comprar` table. All the data in the column will be lost.
  - Added the required column `cadernoId` to the `cliente_caderno_comprar` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "carderno_codigo_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "carderno";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "caderno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "caderno_uma_materia" BOOLEAN,
    "caderno_dez_materias" BOOLEAN,
    "id_capaFK" INTEGER NOT NULL,
    CONSTRAINT "caderno_id_capaFK_fkey" FOREIGN KEY ("id_capaFK") REFERENCES "capa" ("id_capa") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cliente_caderno_comprar" (
    "data" DATETIME NOT NULL,
    "id_clienteFK" INTEGER NOT NULL,
    "cadernoId" INTEGER NOT NULL,

    PRIMARY KEY ("id_clienteFK", "cadernoId", "data"),
    CONSTRAINT "cliente_caderno_comprar_id_clienteFK_fkey" FOREIGN KEY ("id_clienteFK") REFERENCES "cliente" ("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cliente_caderno_comprar_cadernoId_fkey" FOREIGN KEY ("cadernoId") REFERENCES "caderno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cliente_caderno_comprar" ("data", "id_clienteFK") SELECT "data", "id_clienteFK" FROM "cliente_caderno_comprar";
DROP TABLE "cliente_caderno_comprar";
ALTER TABLE "new_cliente_caderno_comprar" RENAME TO "cliente_caderno_comprar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "caderno_codigo_key" ON "caderno"("codigo");
