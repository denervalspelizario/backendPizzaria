import {Request, Response} from 'express';
import { AuthUserService } from '../../services/user/AuthUserService'


// controller do login
class AuthUserController{
  // emtodo
  async handle(req: Request, res: Response){
    
    // recebe do body senha e email
    const {email, password} = req.body;

    // chamando o service
    const authUserService = new AuthUserService();

    // passando os dados para o service
    const auth = await authUserService.execute({
      email,
      password
    })


    // retornando da resposta do service
    return res.json(auth);

  }
}

export { AuthUserController }