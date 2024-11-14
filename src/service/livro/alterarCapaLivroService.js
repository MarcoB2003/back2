import { alterarCapaLivro } from "../../repository/livroRepository.js";

export default async function alterarCapaLivroService(id, caminhoImagem) {
   let linhasAfetadas = await alterarCapaLivro(id, caminhoImagem);
   if (linhasAfetadas === 0)
      throw new Error('Nenhuma capa de livro foi alterada.');
}
