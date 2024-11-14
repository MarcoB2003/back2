import { Router } from 'express';
import { handleSalvarVenda } from '../service/venda/salvarVendaService.js';
import { handleConsultarVendas } from '../service/venda/consultarVendasService.js';
import { handleConsultarVendaPorId } from '../service/venda/consultarVendaPorIdService.js';
import { handleAlterarVenda } from '../service/venda/alterarVendaService.js';
import { handleDeletarVenda } from '../service/venda/deletarVendaService.js';

const endpoints = Router();

endpoints.post('/venda', async (req, resp) => {
    try {
        let vendaObj = req.body;
        let id = await handleSalvarVenda(vendaObj);
        resp.send({ id });
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao salvar a venda' });
    }
});

endpoints.get('/venda', async (req, resp) => {
    try {
        let vendas = await handleConsultarVendas();
        resp.send(vendas);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar vendas' });
    }
});

endpoints.get('/venda/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let venda = await handleConsultarVendaPorId(id);
        resp.send(venda);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar a venda' });
    }
});

endpoints.put('/venda/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let vendaObj = req.body;
        await handleAlterarVenda(id, vendaObj);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar a venda' });
    }
});

endpoints.delete('/venda/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await handleDeletarVenda(id);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao deletar a venda' });
    }
});

export default endpoints;
