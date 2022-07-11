import { Router } from 'express';
import { ClienteController } from '../controllers';
import { CadernoController } from '../controllers';
import { CapaController } from '../controllers';

export const routes = Router();

routes.post('/cliente/pagamento', ClienteController.clientePagamento);
routes.get('/clientes', ClienteController.getClientes);

routes.post('/caderno/criar', CadernoController.criarCaderno);

routes.post('/capa/criar', CapaController.createCapa);
routes.get('/capas', CapaController.pegarTodasAsCapas);
