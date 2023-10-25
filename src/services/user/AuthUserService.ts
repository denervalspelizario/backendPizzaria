import prismaClient from "../../prisma"; 
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
  email: string;
  password: string;
}


class AuthUserService {
  async execute({email, password}: AuthRequest){ 

    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })  
    
    if(!user){
      throw new Error("User/password incorrect")
    }

    const passwordCompare = await compare(password, user.password)

    if(!passwordCompare){
      throw new Error("User/password incorrect")
    }

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JTW_PASSWORD, 
      {
        subject: user.id,
        expiresIn: '30d' 
      }
    )
   
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