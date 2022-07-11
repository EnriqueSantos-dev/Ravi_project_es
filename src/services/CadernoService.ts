import { ICaderno } from '../models/ModelCarderno';
import { prisma } from '../prisma-client/prisma';

export const CadernoService = {
  create: async (caderno: ICaderno, idCapa: number) => {
    try {
      const cadernoExiste = await prisma.caderno.findUnique({
        select: { id: true },
        where: {
          codigo: caderno.codigo
        }
      });

      if (!cadernoExiste) {
        await prisma.caderno.create({
          data: {
            id_capaFK: idCapa,
            codigo: caderno.codigo,
            valor: caderno.valor,
            caderno_uma_materia: caderno.type === '10_MATERIAS' ? false : true,
            caderno_dez_materias: caderno.type === '1_MATERIA' ? false : true
          }
        });
        return { create: true };
      }

      const novosDados = await prisma.caderno.update({
        data: {
          valor: caderno.valor
        },
        select: {
          id: true,
          valor: true
        },
        where: {
          id: cadernoExiste.id
        }
      });
      return { novosDados };
    } catch (error) {
      return error;
    }
  }
};
