import { alterarVenda } from '../../repository/vendaRepository.js';

export async function handleAlterarVenda(id, venda) {
    return await alterarVenda(id, venda);
}
