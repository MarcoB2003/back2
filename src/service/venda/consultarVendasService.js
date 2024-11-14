import { consultarVendas } from '../../repository/vendaRepository.js';

export async function handleConsultarVendas() {
    return await consultarVendas();
}
