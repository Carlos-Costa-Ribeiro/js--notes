// --------------------------------------------------------- CLASSES !! CONSTRUCTORS ---------------------------------------------------------

// As classes são basicamente uma fabrica para criar objetos,
//são usadas para criar objetos automaticamente apenas recebendo parâmetros.

class Empregado {
    constructor (name, age, dRg, dCpf, country) {
        this.nome = name;
        this.idade = age;
        this.rg = new Date;
        this.cpf = dCpf;
        this.pais = country;
    }
};

let listaEmpregados = [];

function incluirEmpregado(name, idade, rg, cpf, pais) {
    let user = new Empregado(name, idade, rg, cpf, pais);
    listaEmpregados.push(user);
    mostrarEmpregados()
};

function mostrarEmpregados() {
    console.log(listaEmpregados);
    console.log(listaEmpregados[0].nome)
};

incluirEmpregado('Carlos', 20, 9999,7777,'Brazil')
