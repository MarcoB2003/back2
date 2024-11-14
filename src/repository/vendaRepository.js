import con from './connection.js';

export async function salvarVenda(venda) {
    let comando = `
    INSERT INTO tb_venda (nome_cliente, data_venda, nome_livro, quantidade, valor_venda)
    VALUES (?, ?, ?, ?, ?)
    `;
    let resposta = await con.query(comando, [venda.nomeCliente, venda.dataVenda, venda.nomeLivro, venda.quantidade, venda.valorVenda]);
    return resposta[0].insertId;
}

export async function consultarVendas() {
    let comando = `
    SELECT id_venda id,
           nome_cliente,
           data_venda,
           nome_livro,
           quantidade,
           valor_venda
    FROM tb_venda
    `;
    let resposta = await con.query(comando);
    return resposta[0];
}

export async function consultarVendaPorId(id) {
    let comando = `
    SELECT id_venda id,
           nome_cliente,
           data_venda,
           nome_livro,
           quantidade,
           valor_venda
    FROM tb_venda
    WHERE id_venda = ?
    `;
    let resposta = await con.query(comando, [id]);
    return resposta[0];
}

export async function alterarVenda(id, venda) {
    let comando = `
    UPDATE tb_venda
    SET nome_cliente = ?, data_venda = ?, nome_livro = ?, quantidade = ?, valor_venda = ?
    WHERE id_venda = ?
    `;
    let resposta = await con.query(comando, [venda.nomeCliente, venda.dataVenda, venda.nomeLivro, venda.quantidade, venda.valorVenda, id]);
    return resposta[0].affectedRows;
}

export async function deletarVenda(id) {
    let comando = `
    DELETE FROM tb_venda
    WHERE id_venda = ?
    `;
    let resposta = await con.query(comando, [id]);
    return resposta[0].affectedRows;
}
