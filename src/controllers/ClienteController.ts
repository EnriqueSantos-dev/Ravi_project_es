import { ClienteService } from '../services/ClienteService';
import { Request, Response } from 'express';

export class ClienteController {
  public clientePagamento = async (req: Request, res: Response) => {
    const params = req.body;
    try {
      const data = await ClienteService.realizarCompra(
        params.cliente,
        params.caderno
      );

      return res.status(200).json({ data });
    } catch (error) {
      return res.json({ error: error }).end();
    }
  };

  public getClientes = async (req: Request, res: Response) => {
    try {
      const data = await ClienteService.getAllClientes();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  };
}
