import { Request, Response, response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

// autenticação de user
class AuthUserController {
  async handle(req: Request, res:Response){
    const {email, password} = req.body;

    const authUserService = new AuthUserService(); // funcao service que faz toda logica

    const auth =  await authUserService.execute({email, password}); // passando os dados para o metodo service


    return res.json(auth);
  }
}

export {AuthUserController}