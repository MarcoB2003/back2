import { deletarLivro } from "../../repository/livroRepository.js";

export default async function deletarLivroService(id) {
    let linhasAfetadas = await deletarLivro(id);
    if (linhasAfetadas === 0)
        throw new Error('Nenhum livro foi removido.');
}
