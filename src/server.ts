
// import dos hooks express
import express, { Request, Response, NextFunction } from 'express';
//cuidado ela sempre tem estar nesta posição(segundo import)
import 'express-async-errors'; 

// import do cors
import cors from 'cors';


// import da rota
import  router  from './routes';

// pegando todos os metodos de express
const app = express();

// indicando que sera usando o json
app.use(express.json());

// habilitando cors
// agora todo mundo pode fazer requsição nessa api
app.use(cors())

// chamando a rota router com um prefixo
app.use('/api', router);

// midleware de tratamento de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  
  // se for uma instancia de erro gera uma excessão
  if(err instanceof Error){

    // retorno um erro com o status e a mensgaem do erro
    return res.status(400).json({
      error: err.message
    })

  }

  // se for erro interno
  return res.status(500).json({
    status: 'error',
    message: 'internal server error'
  })

})



app.listen(3333, () => console.log('Servidor online!!'));
