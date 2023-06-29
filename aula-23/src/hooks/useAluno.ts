import axios from "axios";
import { create } from "zustand";

type Aluno = {
  _id: string;
  nome: string;
  matricula: string;
  curso: string;
  bimestre: string;
};

type State = {
  alunos: Aluno[];
  aluno: string;
  setAluno: (novoNome: string) => void;
  setAlunos: (listaAlunos: Aluno[]) => void;
  fetchAlunos: () => void;
};

export const useAluno = create<State>((set) => ({
  alunos: [],
  aluno: "Wesley Bruno Barbosa Silva",
  setAluno: (novoNome) => set((state) => ({ ...state, aluno: novoNome })),
  setAlunos: (listaAlunos) =>
    set((state) => ({ ...state, alunos: listaAlunos })),
  fetchAlunos: async () => {
    const response = await axios("https://api-aluno.vercel.app/aluno");
    set((state) => ({ ...state, alunos: response.data }));
  },
}));
