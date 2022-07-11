import { Request, Response } from 'express';
import { CadernoService } from '../services/CadernoService';

export class CadernoController {
  public criarCaderno = async (req: Request, res: Response) => {
    const { caderno, idCapa } = req.body;
    try {
      const data = await CadernoService.create(caderno, idCapa);

      return res.status(201).json(data);
    } catch (error) {
      return res.json({ erros: error });
    }
  };
}
