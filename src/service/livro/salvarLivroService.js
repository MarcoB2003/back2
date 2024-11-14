import { salvarLivro, consultarLivroPorTitulo } from "../../repository/livroRepository.js";
import { validarCamposObrigatoriosLivro, validarLivroIgual } from "../../validation/livro/livroValidation.js";

export default async function salvarLivroService(livroObj) {
    validarCamposObrigatoriosLivro(livroObj);

    let registros = await consultarLivroPorTitulo(livroObj.titulo);
    validarLivroIgual(registros);

    let id = await salvarLivro(livroObj);
    return id;
}
