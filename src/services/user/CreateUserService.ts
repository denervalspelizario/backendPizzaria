
// importanto o prisma para acessar o banco
// ele é uma especie de entity framework
import prismaClient from '../../prisma' 

// importando o hahs para encriptar a senha
import { hash } from 'bcryptjs'

// tipagem do parametro do metodo execute
interface UserRequest{
  name: string;
  email: string;
  password: string;
}

// classe
class CreateUserService{

  // metodo
  async execute({name, email, password}: UserRequest){

     // verificar se ele enviou um email
     if(!email){
      throw new Error("O campo email precisa ser preenchido")
    }

    // Verificar se esse email já está cadastrado na plataforma
    // o prisma vai acessar a tabela user(User na migration) 
    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

  
    // se email ja existir no banco
    if(userAlreadyExists){
      throw new Error("Usuário já cadastrado")
    }

    // criando a senha hasheada, password = senha passada, 8 = nivel de cripto
    const passwordHash = await hash(password, 8)

    // se o usuário nao for cadastrado cria-se novo user
    const user = await prismaClient.user.create({
      // itens que eu quero adicionar
      data:{
        //name(campo da tabela) : name (dado que vou adicionar)
        name: name,  
        email: email,
        password: passwordHash,
      },

      // indicando qual os dados quero que retorne
      select:{
        id: true,
        name: true,       
        email: true,
      }
    })


    // retornando o objeto user ja com dados adicionados
    return user;
  }
}

export { CreateUserService }