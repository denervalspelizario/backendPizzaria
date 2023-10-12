import {Request, Response, NextFunction} from 'express';
import 'express-async-errors';


// Tratando erros
export function AppError(err: Error, req: Request, res: Response, next:NextFunction){

  // Se err for do tipo Error(erro do usuario) então
  if(err instanceof Error){
    // retorna mensagem com o erro
    return res.status(400).json({
      error: err.message
    })
  }

  // se não foi erro do usuario então foi erro do sistemas retorna este erro
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
}