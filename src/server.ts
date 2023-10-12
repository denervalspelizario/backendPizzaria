import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import { AppError } from './Error/AppError';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// Tratando erros
app.use(AppError)

app.listen(3333, () => console.log('Tudo ok'));