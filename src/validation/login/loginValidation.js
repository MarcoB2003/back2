export async function validarNovoLogin(loginObj) {
    if (!loginObj.email) throw new Error("Email obrigatório");
    if (!loginObj.senha) throw new Error("Senha obrigatória");
}
