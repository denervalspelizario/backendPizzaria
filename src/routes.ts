import { Router, Request, Response } from 'express';


const router = Router();

router.get('/teste', (request: Request, response: Response) => {
  return response.json({"nome": "Super Pizza"})
})

export {
  router
};