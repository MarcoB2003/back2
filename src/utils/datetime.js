export function horaAtual(){
    let agora = new Date();
    let msg = agora.toLocaleDateString() + '' + agora.toLocaleTimeString();
    return msg;
}