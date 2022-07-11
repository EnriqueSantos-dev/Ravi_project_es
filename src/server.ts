import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

const PORT = 3001;

app.listen(PORT, () => console.log(`http server running in port ${PORT}`));
