import { Router } from "express";
const endpoints = Router();

import consultarLoginService from "../service/login/consultarLoginService.js";

endpoints.post('/login', async (req, resp) => {
    try {
        let loginObj = req.body; // Alteração para req.body
        let registros = await consultarLoginService(loginObj);

        if (registros) {
            resp.send(registros);
        } else {
            resp.status(401).send({ message: "Credenciais inválidas" });
        }

    } catch (error) {
        logErro(error);
        resp.status(400).send(criarErro(error));
    }
});

export default endpoints;
