import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/";

export default async function getCharacters(page) {
  const response = await axios.get(`${BASE_URL}/character/?page=${page}`);

  return response.data;
}
