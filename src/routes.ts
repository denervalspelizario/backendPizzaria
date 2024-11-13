import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();


// Rotas User

// rota post /users que instancia o controler createUser 
router.post('/users', new CreateUserController().handle)

// rota de login(lembra-se login é um post)
router.post('/session', new AuthUserController().handle)

// rota get detalha usuário , com middleware de autenticação
router.get('/me', isAuthenticated,  new DetailuserController().handle )


// Rotas Category

// rota post /category cria uma categoria , com middleware de autenticação
router.post('/category', isAuthenticated,  new CreateCategoryController().handle )

// rota get /category lista as categorias , com middleware de autenticação
router.get('/category', isAuthenticated,  new ListCategoryController().handle )

export default router;
