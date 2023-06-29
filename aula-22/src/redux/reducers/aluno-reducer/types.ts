export type State = {
  alunos: {
    _id: string;
    nome: string;
    matricula: string;
    curso: string;
    bimestre: string;
  }[];
  favoritos: {
    _id: string;
    nome: string;
    matricula: string;
    curso: string;
    bimestre: string;
  }[];
  loading: boolean;
};

export type Action = {
  type: string;
  payload?: any;
};
