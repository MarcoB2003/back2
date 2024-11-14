import { consultarVendaPorId } from '../../repository/vendaRepository.js';

export async function handleConsultarVendaPorId(id) {
    return await consultarVendaPorId(id);
}
