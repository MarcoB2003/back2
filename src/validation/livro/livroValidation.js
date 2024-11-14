// livroValidation.js

export function validarCamposObrigatoriosLivro(livroObj) {
    if (!livroObj.titulo)
        throw new Error('Título do livro obrigatório.');

    if (!livroObj.sinopse)
        throw new Error('Sinopse do livro obrigatória.');

    if (!livroObj.preco || isNaN(livroObj.preco))
        throw new Error('Preço do livro obrigatório e válido.');

    if (!livroObj.lancamento)
        throw new Error('Data de lançamento do livro obrigatória.');

    if (livroObj.estoque == undefined)
        throw new Error('Disponibilidade do livro obrigatória.');
}

export function validarLivroIgual(registros) {
    if (registros.length > 0) {
        throw new Error('Já existe um livro com esse título.');
    }
}

// Função para validar se o livro é único
export function validarLivroUnico(registros) {
    if (registros.length > 0) {
        throw new Error('Já existe um livro com este título.');
    }
}
