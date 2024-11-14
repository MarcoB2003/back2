import { consultarLivros } from "../../repository/livroRepository.js";

export default async function consultarLivrosService(nome) {
  if (!nome) {
      nome = '';
  }
  
  let registros = await consultarLivros(nome);
  return registros;
}
