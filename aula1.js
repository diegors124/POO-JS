const prompt = require('prompt-sync')();

// Modelo de atributos e funções para a criação de um objeto
class Cliente {
    // # -> priva o dado
   #nome; //Atributo
    idade;
    cpf;
    agencia;
    
    //retorna uma string com os dados / atributos
    getDescricao(){
        return  "Nome: " + this.#nome + ", Idade: " + this.idade;
    }

    getNome(){
        return this.#nome;
    }

    setNome(value) {
        this.#nome = value

    }
}

// Objeto que possui as informações da classe de forma individual
let cliente = new Cliente();

cliente.setNome = (prompt("Digite o nome do cliente: "));
cliente.idade = 20;
cliente.cpf = "999.999.999-01"
cliente.agencia = 101010;

console.log(cliente);
console.log(cliente.getNome());

