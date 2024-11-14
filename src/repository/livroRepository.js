import con from './connection.js';

export async function salvarLivro(livro) {
    let comando = `
    INSERT INTO tb_livro (titulo, sinopse, preco, dt_lancamento, em_estoque)
    VALUES (?, ?, ?, ?, ?)
    `;
    let resposta = await con.query(comando, [livro.titulo, livro.sinopse, livro.preco, livro.lancamento, livro.estoque]);
    return resposta[0].insertId;
}

export async function consultarLivros(titulo) {
    let comando = `
    SELECT id_livro id,
           titulo,
           preco,
           dt_lancamento lancamento,  
           em_estoque estoque
    FROM tb_livro
    WHERE titulo LIKE ?
    `;
    let resposta = await con.query(comando, ['%' + titulo + '%']);
    return resposta[0];
}

// Função para consultar um livro específico por título exato
export async function consultarLivroPorTitulo(titulo) {
    let comando = `
    SELECT id_livro id,
           titulo,
           preco,
           dt_lancamento lancamento,
           em_estoque estoque
    FROM tb_livro
    WHERE titulo = ?
    `;
    let resposta = await con.query(comando, [titulo]);
    return resposta[0];
}

// Função para consultar um livro específico por ID
export async function consultarLivroPorId(id) {
    let comando = `
    SELECT id_livro id,
           titulo,
           sinopse,
           preco,
           dt_lancamento lancamento,
           em_estoque estoque
    FROM tb_livro
    WHERE id_livro = ?
    `;
    let resposta = await con.query(comando, [id]);
    return resposta[0]; // Retorna o livro correspondente ao ID
}

// Função para alterar um livro
export async function alterarLivro(id, livro) {
    let comando = `
        UPDATE tb_livro
        SET titulo = ?, sinopse = ?, preco = ?, dt_lancamento = ?, em_estoque = ?
        WHERE id_livro = ?
    `;
    
    let resposta = await con.query(comando, [
        livro.titulo, 
        livro.sinopse, 
        livro.preco, 
        livro.lancamento, 
        livro.estoque, 
        id
    ]);
    return resposta[0].affectedRows; // Retorna o número de linhas afetadas
}

// Função para deletar um livro por ID
export async function deletarLivro(id) {
    let comando = `
    DELETE FROM tb_livro
    WHERE id_livro = ?
    `;
    let resposta = await con.query(comando, [id]);
    return resposta[0].affectedRows; // Retorna o número de linhas afetadas
}

// Função para alterar a capa de um livro por ID
export async function alterarCapaLivro(id, caminhoImagem) {
    let comando = `
    UPDATE tb_livro
    SET img_livro = ?
    WHERE id_livro = ?
    `;
    let resposta = await con.query(comando, [caminhoImagem, id]);
    return resposta[0].affectedRows; // Retorna o número de linhas afetadas
}
