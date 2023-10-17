import { Request, Response} from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


// criação de categoria
class CreateProductController {
  async handle(req: Request, res:Response){
    const {name, price, description, category_id} = req.body;
    

    const createProductService = new CreateProductService(); // funcao service que faz toda logica

    // se req.file nao exister ou seja usuario não adicionou nenehuma imagem
    if(!req.file){
      throw new Error("error upload file")
    } else {

      // pegando por desestruturação filename(imagem) e mudando o nome para banner
      const {originalname, filename: banner} = req.file;

      const product =  await createProductService.execute({ // passando os dados para o metodo service
        name,
        price,
        description,
        banner,
        category_id
      }); 

      return res.json(product);
    }
  }
}

export { CreateProductController }