import prismaClient from "../../prisma"; 
import { hash } from "bcryptjs";

interface UserRequest{
  name: string;
  email: string;
  password: string;
}


class CreateUserService {
  async execute({name, email, password}: UserRequest){ 

    if(!name){
      throw new Error("Field name is required")
    }

    if(!password){
      throw new Error("Field password is required")
    }

    if(!email){
      throw new Error("Email incorrect")
    }
    

    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email:email
      }
    })
    
    if(emailAlreadyExists){
      throw new Error("User already exists")
    }

    
    const passwordHash = await hash(password, 8)
   
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      },
      select: { 
        id: true,
        email: true,
        name: true
      }  
    })

    return user
  }
}

export {
  CreateUserService
}