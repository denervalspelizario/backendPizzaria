import prismaClient from "../../prisma"; // importando o prisma para trabalhar com o banco
import { hash } from "bcryptjs";

// Tipagem 
interface UserRequest{
  name: string;
  email: string;
  password: string;
}


class CreateUserService {
  async execute({name, email, password}: UserRequest){ // adicionando  tipagem

    if(!name){
      throw new Error("Field name is required")
    }

    if(!password){
      throw new Error("Field password is required")
    }


    // Validando email
    if(!email){
      throw new Error("Email incorrect")
    }
    // Validando se email já existe
    const emailAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email:email
      }
    })
    
    if(emailAlreadyExists){
      throw new Error("User already exists")
    }

    // criptografando a senha
    const passwordHash = await hash(password, 8)
   
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      },
      select: { // só vai aparecer retornar os itens que estiverem true o resto vai ocultar
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