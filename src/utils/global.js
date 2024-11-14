import { horaAtual } from "./datetime.js";

global.criarErro = function criarErro(err) {
let obj = {
    erro: err.message
}
return obj;

}

global.logErro = function logError(err){
    console.log(horaAtual() + 'ERROR --> ' + err.message); 
}