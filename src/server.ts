import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import { AppError } from './Error/AppError';
import cors from 'cors';
import path from 'path'; // usada para manipular caminhos de arquivo e diretório


const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

// criando uma rota estatica(files) para acessar a pasta tmp
// é com esse comando que se consegue acessar a imagem 
app.use(
  '/files', 
  express.static(path.resolve(__dirname, '..', 'tmp'))
)

// Tratando erros
app.use(AppError)

app.listen(3333, () => console.log('Servidor online !!!'));