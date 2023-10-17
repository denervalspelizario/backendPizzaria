import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import multer from 'multer';
import uploadConfig from './config/multer'

const router = Router();

// configurações de upload de imagem
const upload = multer(uploadConfig.upload("./tmp"));

// Rotas de USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

// Rotas CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

// Rotas PRODUCT
router.post('/product', isAuthenticated, upload.single('file') ,new CreateProductController().handle)


export { router };