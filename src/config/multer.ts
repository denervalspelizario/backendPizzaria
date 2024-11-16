import crypto from 'crypto'; // ja vem node
import multer from 'multer' // precisa instalar

import {extname, resolve} from 'path' // tb ja vem com node

export default{

  // recebe a o caminho da pasta que será salva
  upload(folder: string){
    return{

      storage: multer.diskStorage({
        
        // destino onde será salva essa imagem 
        // __dirname = diretorio onde estamos
        // .. volta uma pasta, .. volta outra pasta
        // folder = pasta onde ficara armazenadas as imagens  
        destination: resolve(__dirname, '..', '..', folder),

        // criando um filename para evitar conflito de nome
        // recebe 3 parametros request, file(o arquivo), callback
        filename: (request, file, callback) => {

          // criando um hash aleatorio
          const fileHash = crypto.randomBytes(16).toString("hex");
          
          // criando um novo nome com a hash + o nome original da iagem
          const fileName = `${fileHash}-${file.originalname}`

          // retornando o novo nome hasheado
          return callback(null, fileName)
        }
      })
    }
  }
}