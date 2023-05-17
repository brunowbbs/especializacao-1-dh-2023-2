import axios from "axios"

/**
 * Função que recebe o ano de nascimento de um usuario e retorna a sua idade
 * @author Wesley Bruno Barbosa Silva
 * @param {number} ano
 * @returns {number}
 */

export function calculaIdade(ano){
  const ATUAL_YEAR = 2023

  return ATUAL_YEAR - ano
}

/**
 * Função que recebe uma lista de numeros e retorna apenas os numeros pares
 * @param {Array<number>} numeros
 * @returns {Array<number>}
 */

export function filtraNumerosPares(numeros){
  return numeros.filter((numero)=>numero %2 === 0)
}

/**
 * Funcao que busca no servidor as infos de um produto
 * @param {number} id 
 * @returns {Promise<{id:number, title:string, description:string}>}
 */
export async function getProduct(id){
  return await axios.get(`https://dummyjson.com/products/${id}`).data
}