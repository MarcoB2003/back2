import { salvarVenda } from '../../repository/vendaRepository.js';

export async function handleSalvarVenda(venda) {
    return await salvarVenda(venda);
}
