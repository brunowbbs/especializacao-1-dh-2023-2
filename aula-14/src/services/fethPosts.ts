import api from "./api";

export type Response = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fetchPosts() {
  return await api.get<Response[]>("/posts");
}

//GENERICS
