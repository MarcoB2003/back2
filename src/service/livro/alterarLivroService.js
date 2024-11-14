import { alterarLivro } from "../../repository/livroRepository.js";
import { validarCamposObrigatoriosLivro } from "../../validation/livro/livroValidation.js";

export default async function alterarLivroService(livroObj, id) {
    // Validar campos
    validarCamposObrigatoriosLivro(livroObj);

    // Passar 'id' primeiro e 'livroObj' segundo
    let linhasAfetadas = await alterarLivro(id, livroObj);
    if (linhasAfetadas === 0)
        throw new Error('Nenhum livro foi alterado.');
}
