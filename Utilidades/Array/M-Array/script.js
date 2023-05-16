// ----------------------------------------------- SIMPLE METHODS ------------------------------------------------------

let list =  ["caju", "bola", "madeira"];

// O método toString()", converte uma variavel que seja um array para uma string.
// Separa os elementos automaticamente apenas pela virgula de dentro do array.aaa
let listToString  = list.toString();
console.log(listToString);


// O método join("-")", converte uma variavel que seja um array para uma string.
// Separa os elementos pelo parâmetro do join().
let listToJoin = list.join("$");
console.log(listToJoin);


// O método indexOf("caju"), busca o parâmetro dentro do array, retornando o seu indice, caso ele não encontre o parâmetro, ele retorna o valor -1.
let listIndexOf = list.indexOf("caju")
console.log(listIndexOf );


// O método pop(), vai remover o ultimo indice do array.
let listPop = list.pop();
console.log(listPop);


// O método shift(), vai remover o primeiro indice do array.
let listShift = list.shift();
console.log(listShift);


// O método unshift(), vai remover o primeiro indice do array e substituilo pelo parâmetro.
let listUnshift = list.unshift("abacate");
console.log(listUnshift);


// O método push(), adiciona o parâmetro dentro do array, assim aumentando seu tamanho.
//aumentando seu tamanho
let listPush = list.push("azeitona");
console.log(listPush);


// O método splice(), tem como primeiro parâmetro a posição do indice,
//o segundo a quantidade de itens a ser deletado após a posição do item requerido.
let listSplice = list.splice(1, 1)
console.log(listSplice);


// O método includes(), determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
let listIncludes = list.includes("madeira");
console.log(listIncludes);


// O método reverse(), inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
let listReverse = list.reverse();
console.log(listReverse);


// ----------------------------------------------- ADVANCED METHODS -----------------------------------------------------

const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 0, driverLicense: false },
];


// 1 - find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
// O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback retorne o valor true. 
// Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined.

const highestSallary = data.find((user) => user.sallary > 5000);

console.log(highestSallary);
// ===================================================================================================================


// 2 - findIndex

// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. 
// Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const lowestSallary = data.findIndex(
    (user) => user.sallary > 0 && user.sallary < 2000
);

console.log(lowestSallary);

data[lowestSallary].sallary += 200;

console.log(data);
// ===================================================================================================================


// 3 - map

// O método map() chama uma função fornecida uma vez para cada elemento em uma matriz, em ordem, e constrói uma nova matriz a partir dos resultados.

const newArrayData = data.map((user) => (user.newsletter = false));

console.log(newArrayData);
// ===================================================================================================================


// 4 - filter

// O método filter() chama uma função fornecida uma vez para cada elemento em uma matriz, e constrói uma nova matriz de todos
//os valores para os quais retorna um valor que coagir a verdade. Os elementos de matriz que não passam no teste são ignorados e não estão incluídos na nova matriz.

const drivers = data.filter((user) => user.driverLicense === true);

console.log(drivers);
// ===================================================================================================================


// 5 - reduce

//  O método de redução executa uma função de retorno de chamada "redutora" fornecida pelo usuário em cada elemento da matriz, em ordem, passando o valor de retorno do
//cálculo sobre o elemento anterior. O resultado final da execução do redutor em todos os elementos da matriz é um único valor.
// Na primeira vez que o retorno é executado não há "valor de retorno do cálculo anterior". Se fornecido, um valor inicial pode ser usado em seu lugar. 
// Caso contrário, o elemento array no índice 0 é usado como o valor inicial e a iteração começa a partir do próximo elemento (índice 1 em vez de índice 0).
// Talvez o caso mais fácil de entender seja devolver a soma de todos os elementos em uma matriz:reduce()

const sallariesSum = data.reduce(
    (totalSallary, user) => (totalSallary += user.sallary),
    0
);

console.log(sallariesSum);
// ===================================================================================================================


// 6 - forEach

// O método forEach() executa uma função fornecida uma vez para cada elemento de matriz, ele não retorna nada naturalmente, pode ser utilizado em "Node.lists"

const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}!`);
    });
};

showUserNames(data);
// ===================================================================================================================


// 7 - some

// O método some() testa se pelo menos um elemento na matriz passa no teste implementado pela função fornecida. Ele retorna verdadeiro se, na matriz, 
//encontrar um elemento para o qual a função fornecida retorna verdadeiro; caso contrário, ele retorna falso. Não modifica a matriz.

let someoneWithNesletter = data.some((user) => user.newsletter);

console.log(someoneWithNesletter);

data[0].newsletter = true;

someoneWithNesletter = data.some((user) => user.newsletter);

console.log(someoneWithNesletter);
// ===================================================================================================================


// 8 - every

// O método de every() testa se todos os elementos da matriz passam pelo teste implementado pela função fornecida. Devolve um valor booleano.

const everyUserHasName = data.every((user) => user.name);

console.log(everyUserHasName);

const everyUserHasGoodSallary = data.every((user) => user.sallary > 2000);

console.log(everyUserHasGoodSallary);
// ===================================================================================================================


// 9 - sort

// O método de sort() classifica os elementos de uma matriz no lugar e retorna a referência à mesma matriz, agora classificada.

let HighToLowSallary = data.sort((a, b) => {
    if (b.name === a.name) {
        return 0;
    } else if (b.name > a.name) {
        return 1;
    } else {
        return -1;
    }
});

console.log(HighToLowSallary);
// ===================================================================================================================
