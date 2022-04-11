import {Cliente} from "./cliente.js"
class contaCorrente {
    agencia;
    #saldo = 0;
    
    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
        }
    }
    sacar(valor){
        if(this.#saldo >=valor){
        this.#saldo -=valor;
            return valor;
    }
    }
get saldo(){
    return this.#saldo
}

}

const cliente1 = new Cliente();
const Cliente1 = new contaCorrente();



console.log(Cliente1.saldo);
Cliente1.depositar(1000);
console.log(Cliente1.saldo);
Cliente1.depositar(1000);
Cliente1.saldo = 1000;
console.log(Cliente1.saldo);