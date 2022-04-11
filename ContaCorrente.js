export class contaCorrente {
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