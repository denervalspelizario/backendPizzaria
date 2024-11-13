import {NextFunction, Request, Response} from 'express'
import { verify } from 'jsonwebtoken'


interface Payload{
  sub: string; // id do usuário, olhar AuthService
}

// middleware de autenticação
// vai servir para usar em rotas que usuário precisa estar autenticado
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction // indicando que é um middleware
){

  // Receber o token
  const authToken = req.headers.authorization;

  // senão existir retorna erro 401
  if(!authToken){
    return res.status(401).end();
  }

  // Extraindo o conteúdo entre espaços para obter apenas o token
  // A estrutura da string contém o prefixo "Bearer" e o token; como só precisamos do token,
  // ignoramos o "Bearer" e capturamos apenas o segundo item, que é o token
  const [, token] = authToken.split(" ")

  
  try{

    //Validar esse token.
    // sub = id do usuario 
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload; // devolve o Payload(tipagem que retorbna id do usuário)


    // ou seja o verify vai pegar o token + jwt secret
    // verifica se é um token valido e retorna o id(sub) do usuário
    // ou seja faço a descriptografia e dentro do token tem o id do user
    // e pego ela - para verificar oq tem dentro do token veja AuthUserService

    //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req.
    req.user_id = sub;

    // retorna o next que indica que passou pelo middleware
    return next();

  }catch(err){ // deu errado
    // retorna o erro
    return res.status(401).end();
  }



}