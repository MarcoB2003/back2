// vendaValidation.js

export function validarCamposObrigatoriosVenda(vendaObj) {
    if (!vendaObj.nomeCliente) {
        throw new Error('Nome do cliente obrigatório.');
    }

    if (!vendaObj.dataVenda) {
        throw new Error('Data da venda obrigatória.');
    }

    if (!vendaObj.idCompra) {
        throw new Error('ID da compra obrigatório.');
    }

    if (!vendaObj.preco || isNaN(vendaObj.preco)) {
        throw new Error('Preço da venda obrigatório e deve ser um número válido.');
    }

    if (!vendaObj.quantidade || isNaN(vendaObj.quantidade)) {
        throw new Error('Quantidade da venda obrigatória e deve ser um número válido.');
    }

    if (!vendaObj.idLivro) {
        throw new Error('ID do livro obrigatório.');
    }
}

// Função para validar se uma venda é única
export function validarVendaUnica(registros, novaVenda) {
    const vendaExistente = registros.find(venda => 
        venda.idCompra === novaVenda.idCompra && venda.idLivro === novaVenda.idLivro
    );

    if (vendaExistente) {
        throw new Error('Já existe uma venda registrada com este ID de compra e ID de livro.');
    }
}
