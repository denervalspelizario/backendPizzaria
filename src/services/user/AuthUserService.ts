
import prismaClient from "../../prisma"; // acessando banco
import { compare } from 'bcryptjs' // criptografia
import { sign } from 'jsonwebtoken' // gerar o token

// tipagem do parametro do método execute
interface AuthRequest{
  email: string;
  password: string;
}

// service de autenticação(login)
class AuthUserService{
  async execute({ email, password }: AuthRequest){
    
    
    //Verificar se o email existe.
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(!user){
      throw new Error("Usuario/senha incorretas")
    }

    // preciso verificar se a senha que ele mandou está correta.
    // password = senha passada, user.password senha no banco
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
      throw new Error("Usuario/senha incorretas")
    }

    // Se deu tudo certo vamos gerar o token pro usuario.
    const token = sign(
      {
        // oque vai estar no payload do jwt (no caso name e email)
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET, // hash na variavel de ambiente
      {
        // oque vai estar na options
        subject: user.id, // id do user
        expiresIn: '30d' // tempo de expiração
      }
    )


    // retornando as infos do usuario mais o token
    return { 
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
     }
    
  }
}

export { AuthUserService };