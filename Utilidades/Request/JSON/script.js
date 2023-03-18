// -------------------------------------- JSON ----------------------------------------------

//Meio de comunicação para realizar requisições entre sistemas

// Muito semelhante à um Objeto : 

/*
{
    "nome1": "Alberto",
    "nome2": "Alberto",
    "nome3": "Alberto",
    "nome4": "Alberto",
    "nome5": "Alberto"
}
*/
// O que difere é o uso de aspas duplas nas propriedades
// Normalmente ele é passado por uma string :
// '{"nome1": "Alberto","nome2": "Alberto","nome3": "Alberto","nome4": "Alberto","nome5": "Alberto"}'


// Para transformar uma string em um objeto JSON, deve se usar a função "JSON.parse" :
let request = '{"nome1": "Alberto","nome2": "Alberto","nome3": "Alberto","nome4": "Alberto","nome5": "Alberto"}';
let request_true = JSON.parse(request);
console.log(request_true);

// Para transformar um objeto JSON em uma string, deve se usar a função "JSON.stringify" :
let request1 = {
    nome1: "Alberto",
    nome2: "Alberto",
    nome3: "Alberto",
    nome4: "Alberto",
    nome5: "Alberto"
}
let request_true1 = JSON.stringify(request1);
console.log(request_true1);



// ------------------------------- FETCH - THEN - CATCH - ASYNC - AWAIT -----------------------

// O "fetch" é utilizado para realizar uma requisição a uma API, nele vai a URL da API.

// O "then" é uma sintaxe de construção de requisiçoes, ele vai executar alguma coisa que
//o "fecth" conseguiu buscar, de forma automatica o resultado do "fecth" é recebido como parâmetro
//dentro do "then()'

// O "catch" é utilizado, caso ocorra algum erro durante os processos antecedentes,
//normalmente é colocado um codigo para mostrar ao usuario que houve algum erro.

// O "async" é utilizado no inicio de uma "function" de requisição, ele determina que essa função
//utilizara o metodo "async", ele apenas possibilita o uso do "await".

// O "await" é uma sintaxe de construção de requisiçoes, semelhante ao "then" ela vai
//dizer ao JS que, para o codigo da requisição seguir, deve esperar determinado comando, e
//é apenas uma forma diferente de construir uma requisição, e tambem mais simples.
