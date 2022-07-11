import { ICapa } from '../models/ModelCapa';
import { prisma } from '../prisma-client/prisma';

export const CapaService = {
  create: async (capa: ICapa) => {
    try {
      await prisma.capa.create({
        data: {
          codigo: capa.codigo,
          nome: capa.nome
        }
      });

      return { create: true };
    } catch (error) {
      return error;
    }
  },
  getAllCapas: async () => {
    try {
      const data = await prisma.capa.findMany({});
      return data;
    } catch (error) {
      return error;
    }
  }
};
