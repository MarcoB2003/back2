import { consultarLogin } from "../../repository/loginRepository.js";
import { validarNovoLogin } from "../../validation/login/loginValidation.js";

export default async function consultarLoginService(loginObj) {
    validarNovoLogin(loginObj);

    // Validação direta das credenciais exatas
    if (loginObj.email !== "admin@email.com" || loginObj.senha !== "senha") {
        return null; // Retorna null se as credenciais não forem exatas
    }

    let registros = await consultarLogin(loginObj);
    return registros;
}
