import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

// Tipagem 
interface AuthRequest{
  email: string;
  password: string;
}


class AuthUserService {
  async execute({email, password}: AuthRequest){ // adicionando  tipagem

    // validar email
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })  
    
    if(!user){
      throw new Error("User/password incorrect")
    }

    //validar password compare(bcryptjs)
    const passwordCompare = await compare(password, user.password)

    if(!passwordCompare){
      throw new Error("User/password incorrect")
    }

    // gerando token
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JTW_PASSWORD, // senha jwt  ** nao esquecer de alterar "script":false no tsconfig
      {
        subject: user.id,
        expiresIn: '30d'  // expira em 30 dias  
      }
    )
   
    // objeto que será gerado
    const userProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token  
    }

    return {userProfile}
  }
}

export {
  AuthUserService
}