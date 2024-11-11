import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();


// Rotas User

// rota post /users que instancia o controler createUser 
router.post('/users', new CreateUserController().handle)

// rota de login(lembra-se login é um post)
router.post('/session', new AuthUserController().handle)

export default router;
