import {Request, Response} from 'express' // tipagem da request
// importando o service
import { DetailUserService } from '../../services/user/DetailUserService'

// controller
class DetailuserController{
  // metodo padrão
  async handle(req: Request, res: Response){

    // id od usuário ao logar
    // Olhar o middleware IsAuth
    const user_id = req.user_id;

    // chamando o service
    const detailUserService = new DetailUserService();

    // chamando o metodo do service(execute)
    const user = await detailUserService.execute(user_id);

    // retornando a resposta do metodo
    return res.json(user);

  }
}

export { DetailuserController  }