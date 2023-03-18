// --------------------------------------------- FUNCTIONS ---------------------------------------------

// Há 3 maneiras de ser criar funções, pode se criar uma varivel que receba uma função e 
//a função não pode ser nomeada, os parâmetros devem ser passados pela variavel.

let nome = "CarlosDaniel";
let x = function(nome1) {
    return nome1.length;
};
let z = x(nome);
console.log (z);


// Pode se criar uma função solta, (porem ela deve ser nomeada) que receba uma função
//e os parâmetros devem ser passados pela variavel.

function numeroNome(nome2) {
    return nome2.length
}
let xx = numeroNome(nome)
console.log(xx);


// Pode se criar uma função com arroy, (não da pra utilizar o "this") funciona igual 
//uma função, e da pra utilizar de 2 maneiras.

let xxx = nome3 => nome3.length;
let zz = xxx(nome);
console.log(zz);

let xxxx = (nome3) => {
    return nome3.length;
}
let zzz = xxxx(nome);
console.log(zzz);
