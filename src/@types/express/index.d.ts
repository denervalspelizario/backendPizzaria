

// criando nossa propria tipagem que será usada no middleware
// 
declare namespace Express{

  // estou dizendo que dentro da TIPAGEM request vai ter também
  // user_id tipo string
  export interface Request{
    user_id: string;
  }
}

// Atenção
// Observação para que esse alteração funcione vc tem que ir em tsconfig
// e fazer a alteração  "typeRoots": [ "./src/@types"], de comentado