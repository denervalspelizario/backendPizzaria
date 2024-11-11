import {Request, response, Response} from 'express'


import { CreateUserService } from '../../services/user/CreateUserService'


/*
  neste projeto será feito controller > service 
  controller indicara o metodo http e a resposta da requisição
  service ficara a logica e o acesso ao banco
*/


// controller Create
class CreateUserController{

  // método handle
  async handle(req: Request, res: Response){

    // vai receber do body da requisição name, email e password
    const { name, email, password } = req.body;

    // vai instancia um objeto do service CreateUserService la do service
    const createUserService = new CreateUserService();

    // chamando o metodo execute do service adicionando os dados do body
    // e jogando a resposta na const user
    const user = await createUserService.execute({
      name,
      email,
      password
    });

    // retorna o objeto user no formato json
    return res.json(user)
  }
}

export { CreateUserController }