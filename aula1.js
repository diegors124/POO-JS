const prompt = require('prompt-sync')();

class Cliente {
    nome;
    idade;
    cpf;
    agencia;
}

let cliente = new Cliente();

cliente.nome = prompt("Digite o nome do cliente: ");
cliente.idade = 20;
cliente.cpf = "999.999.999-01"
cliente.agencia = 101010;

console.log(cliente);

