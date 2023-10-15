import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// tipagem  da verificação entre token e senha JWT
interface Payload{
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){

  // recebendo o token
  const authToken = req.headers.authorization;

  // validando token
  if(!authToken){
    return res.status(401).end();
  }

  // pegandos segundo item que é o token
  const [, token] = authToken.split(" ")

  try {

    // sub é o valor id = uuid  que é o retorno de verify entre token e senha jwt
    const { sub } = verify( token, process.env.JTW_PASSWORD ) as Payload; // adicionando tipagem a verificação
                                                                          
                                                                          

    // recuperando o id(uuid) e colocar dentro de uma variavel user_id dentro de req 
    // para ser usado de maneira global                                                                      
    req.user_id = sub

    return next();
    
  }catch(error){
   return res.status(401).end() 
  }
  
  
}