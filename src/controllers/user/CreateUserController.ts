import { Request, Response, response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

// criação de user
class CreateUserController {
  async handle(req: Request, res:Response){
    const {name, email, password} = req.body;

    const createUserService = new CreateUserService(); // funcao service que faz toda logica

    const user =  await createUserService.execute({name, email, password}); // passando os dados para o metodo service

    return res.json(user)
  }
}

export {CreateUserController}