-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "carderno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "caderno_uma_materia" INTEGER NOT NULL,
    "caderno_dez_materias" INTEGER NOT NULL,
    "id_capaFK" INTEGER NOT NULL,
    CONSTRAINT "carderno_id_capaFK_fkey" FOREIGN KEY ("id_capaFK") REFERENCES "capa" ("id_capa") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "capa" (
    "id_capa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "cliente_caderno_comprar" (
    "data" DATETIME NOT NULL,
    "id_clienteFK" INTEGER NOT NULL,
    "cardernoId" INTEGER NOT NULL,

    PRIMARY KEY ("id_clienteFK", "cardernoId", "data"),
    CONSTRAINT "cliente_caderno_comprar_id_clienteFK_fkey" FOREIGN KEY ("id_clienteFK") REFERENCES "cliente" ("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cliente_caderno_comprar_cardernoId_fkey" FOREIGN KEY ("cardernoId") REFERENCES "carderno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpf_key" ON "cliente"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "carderno_codigo_key" ON "carderno"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "capa_codigo_key" ON "capa"("codigo");
