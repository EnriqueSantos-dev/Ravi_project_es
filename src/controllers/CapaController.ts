import { CapaService } from '../services/CapaService';
import { Request, Response } from 'express';

export class CapaController {
  public createCapa = async (req: Request, res: Response) => {
    const { capa } = req.body;

    try {
      const data = await CapaService.create(capa);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(200).json({ error: error });
    }
  };

  public pegarTodasAsCapas = async (req: Request, res: Response) => {
    try {
      return res.status(200).json(await CapaService.getAllCapas());
    } catch (error) {
      return res.status(200).json(error);
    }
  };
}
