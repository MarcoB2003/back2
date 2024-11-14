import { deletarVenda } from '../../repository/vendaRepository.js';

export async function handleDeletarVenda(id) {
    return await deletarVenda(id);
}
