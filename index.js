import {Cliente} from "./cliente.js";
import { contaCorrente } from "../ContaCorrente.js";

const cliente1 = new Cliente();
const Cliente1 = new contaCorrente();



console.log(Cliente1.saldo);
Cliente1.depositar(1000);
console.log(Cliente1.saldo);
Cliente1.depositar(1000);
Cliente1.saldo = 1000;
console.log(Cliente1.saldo);