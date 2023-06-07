type TypeObj<T> = {
  nome: string;
  idade: number;
  valor_desconhecido?: T;
};

// interface IPessoa {
//   nome: string;
//   idade: number;
// }

const pessoa: TypeObj<string> = {
  nome: "Wesley",
  idade: 30,
  valor_desconhecido: "TEXTO",
};

const carro: TypeObj<number> = {
  nome: "Compass",
  idade: 1,
  valor_desconhecido: 8,
};

// function qlq<T>(n1:T){
//   console.log(n1)
// }

// qlq<string>("s")
