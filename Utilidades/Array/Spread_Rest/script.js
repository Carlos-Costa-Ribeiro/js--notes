// -------------------------------------------------- SPREAD -----------------------------------------------

// O operador "spread" é usado para unir arrays e objetos com outros arrays e objetos,
//para utilizar é necessario usar "..." e na frente do objeto ou array.
let x = [1,2,3,4,5];
let z = [...x,6,7,8,9,10];
console.log(z);

let xx = {
    nome:"Carlos",
    sobrenome:"Daniel"
};
let zz = {
    ...xx,
    idade:19,
    cidade:"Itu"
}
console.log(zz);

function adicionarInfo(abacate) {
    let novaInfo = {
        ...abacate,
        sexo:"masculino",
        mae: "Amanda"
    }
    return novaInfo
}
console.log(adicionarInfo(zz));


// -------------------------------------------------- REST -----------------------------------------------

// O "rest" é utilizado no momento de se passar parâmetros para dentro da função
//caso vc não saiba quantos parâmetros serão recebidos tera de usar o rest, igual se 
//utiliza o 'spread"
let nomes = ["Daniel", "Carlos"];
function adicionarNome( manga, ...uva ){
    let todosNomes = [
        ...manga,
        ...uva
    ]
    return todosNomes
}
let todos = adicionarNome(nomes, "Maria", "Jose", "Renato", "Will");
console.log(todos); 