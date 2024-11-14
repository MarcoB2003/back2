import salvarLivroService from "../service/livro/salvarLivroService.js";
import consultarLivrosService from "../service/livro/consultarLivrosService.js";
import consultarLivroPorIdService from "../service/livro/consultarLivroPorIdService.js";
import alterarLivroService from "../service/livro/alterarLivroService.js";
import deletarLivroService from "../service/livro/deletarLivroService.js";
import alterarCapaLivroService from "../service/livro/alterarCapaLivroService.js";

import multer from "multer";
import { Router } from "express";
const endpoints = Router();


// Endpoint para salvar um livro
endpoints.post('/livro', async (req, resp) => {
    try {
        let livroObj = req.body;
        let id = await salvarLivroService(livroObj);
        resp.send({ id: id });
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao salvar o livro' });
    }
});

// Endpoint para consultar todos os livros
endpoints.get('/livro', async (req, resp) => {
    try {
        let titulo = req.query.titulo;
        let registros = await consultarLivrosService(titulo);
        resp.send(registros);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar livros' });
    }
});

// Endpoint para consultar um livro por ID
endpoints.get('/livro/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let livro = await consultarLivroPorIdService(id);
        resp.send(livro);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar o livro' });
    }
});

// Endpoint para atualizar um livro
endpoints.put('/livro/:id', async (req, resp) => {
    try {
        let livroObj = req.body;
        let id = req.params.id;
        await alterarLivroService(livroObj, id);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar o livro' });
    }
});

// Endpoint para deletar um livro
endpoints.delete('/livro/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        await deletarLivroService(id);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao deletar o livro' });
    }
});

// Configuração do multer para upload de imagens
let uploadCapa = multer({ dest: './storage/capaLivro' });

// Endpoint para alterar a capa de um livro
endpoints.put('/livro/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {
    try {
        let id = req.params.id;
        let caminhoImagem = req.file.path;
        await alterarCapaLivroService(id, caminhoImagem);
        resp.status(204).send();
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao alterar a capa do livro' });
    }
});

// Novo endpoint para consultar todos os usuários
endpoints.get('/usuarios', async (req, resp) => {
    try {
        let registros = await consultarUsuarios(); // Chamada ao serviço para consultar usuários
        resp.send(registros);
    } catch (err) {
        console.error(err);
        resp.status(400).send({ erro: 'Erro ao consultar usuários' });
    }
});

// Exportando os endpoints
export default endpoints;
