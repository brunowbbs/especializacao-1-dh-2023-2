/*
  String
  Booleans
  Number
  Array
  Any
*/

let nome: string = "Wesley";
let isChecked: boolean = true;
let idade: number = 30;

let nomeCompleto: string;

nomeCompleto = "10";

let numeros: string[] = [];
numeros.push("um", "dois");

let pessoa: any = [];

pessoa.push(() => alert("ok"));

//-------------------------

function soma(n1?: number, n2?: number) {
  if (!n1) {
    return n2;
  }

  if (!n2) {
    return n1;
  }

  return n1 + n2;
}

soma(10);

//-------------------------

const programador = {
  nome: "1000",
  idade: 30,
  cidade: "Porteirinha",
  cep: "39520000",
};

// programador.nome = "bruno"

type ProgramadorType = {
  nome: string;
  idade: number;
  cidade: string;
  cep: string;
};

function printarDadosProgramador(programador: ProgramadorType) {
  console.log(programador.nome);
}

printarDadosProgramador(programador);

//-----------------------------

// UNION TYPE

let valor: number | string | undefined;

valor = document.getElementById("Valor")?.innerHTML;

//______________________________

let arrai: [number, number, string, boolean] = [1, 3, "Wesley", true];

// arrai[0] = "10"
