import con from './connection.js';

export async function consultarLogin(usuario) {
    let comando = `
    SELECT * FROM login WHERE email = ? AND senha = ?
    `;

    let resposta = await con.query(comando, [usuario.email, usuario.senha]);

    return resposta[0] || null; // Retorna null se nenhum registro for encontrado
}
