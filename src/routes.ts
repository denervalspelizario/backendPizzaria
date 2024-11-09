import { Router, Request, Response } from 'express';

const router = Router();

// rota get teste
router.get('/teste', (req: Request, res: Response) => {
  return res.json({nome: 'Dener Pelizario'})
});

export default router;
