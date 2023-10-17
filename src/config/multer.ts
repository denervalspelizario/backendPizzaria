import crypto from 'crypto'; // já vem com node
import multer from 'multer'; // biblioteca para trabalhar com imagens

import {extname, resolve} from 'path'; // ja vem com node

export default {
  upload(folder: string){ // vai receber uma string
    return{
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder), // __dirname diretorio onde estamos
        filename: (request, file, callback) => { // para evitar conflito de nome usar o filename
          // gerando hash de 16 bytes hexadecimal
          const fileHash = crypto.randomBytes(16).toString("hex");
          
          // arquivo da imagem - filehash = hash gerado  file.originalname = nome original da foto
          const fileName = `${fileHash}-${file.originalname}` 

          // retornando null = erro que não será tratado  filename = arquivo da imagem hasheado
          return callback(null, fileName)
        }
      })
    }
  }
}

