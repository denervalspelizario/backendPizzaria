import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

// tipagem  da verificação entre token e senha JWT
interface Payload{
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction){

  // recebendo o token
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

  try {

    const { sub } = verify( token, process.env.JTW_PASSWORD ) as Payload; 
                                                                                                             
    req.user_id = sub

    return next();
    
  }catch(error){
   return res.status(401).end() 
  }
  
  
}