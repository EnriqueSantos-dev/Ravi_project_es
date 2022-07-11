import { ICaderno } from '../models/ModelCarderno';
import { prisma, PrismaErros } from '../prisma-client/prisma';
import { IClient } from '../models/ModelClient';

export const ClienteService = {
  realizarCompra: async (
    cliente: IClient,
    caderno: Omit<ICaderno, 'valor' | 'type'>
  ) => {
    try {
      const clienteExiste = await prisma.cliente.findUnique({
        select: { id_cliente: true },
        where: {
          cpf: cliente.cpf
        }
      });

      if (clienteExiste) {
        await prisma.cliente_caderno_comprar.create({
          data: {
            data: new Date(),
            cadernoId: caderno.id,
            id_clienteFK: clienteExiste.id_cliente
          }
        });

        return { status: 'nova comprar adicionada' };
      }

      const data = await prisma.cliente.create({
        data: {
          nome: cliente.nome,
          cpf: cliente.cpf,
          cliente_caderno_comprar: {
            create: {
              data: new Date(),
              cadernoId: caderno.id
            }
          }
        }
      });
      return { create: true };
    } catch (error) {
      return error;
    }
  },
  getAllClientes: async () => {
    try {
      const data = await prisma.cliente.findMany({});

      return data;
    } catch (error) {}
  }
};
