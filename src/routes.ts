import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

// importando multer (trabalhando com armazenamento de imagens)
import multer from 'multer';
import uploadConfig from './config/multer'


const router = Router();

// indicando que o upload será feito na pasta tmp
// ver pasta config/multer.ts
const upload = multer(uploadConfig.upload("./tmp"));


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

//Rotas Product


// criação de um produto
router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle )

// busca de todos os produtos por categoria
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )

export default router;
