import { consultarLivroPorId } from "../../repository/livroRepository.js";
import { validarLivroUnico } from "../../validation/livro/livroValidation.js";

export default async function consultarLivroPorIdService(id) {
    let registros = await consultarLivroPorId(id);
    validarLivroUnico(registros);

    let livro = registros[0];
    return livro;
}
