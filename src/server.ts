import express, { json } from 'express';
import cors from 'cors';
import { routes } from './routes/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`http server running in port ${PORT}`));
