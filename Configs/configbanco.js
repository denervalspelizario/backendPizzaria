/*
  * Primeiro crie o banco pelo beekeeper

  * depois instale o prisma no projeto
    yarn add prisma
    yarn add @prisma/client
    npx prisma init
    
    Ao instalar pelos comandos irá criar a pasta prisma e 
    a variavel de ambiente .env

  * va na .env e coloque o adm, senha e o banco

  * na pasta src cire prisma> index.ts
    e configure o prismaclient

  * crie as migration dentro de prisma> schema.prisma  

  * depois de criado as migration gere elas como o comando yarn prisma migrate dev
    e confira se no banco foi criado tudo certo  

*/