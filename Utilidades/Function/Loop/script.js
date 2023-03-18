// ----------------------------------------FOR/WHILE----------------------------------------------

// Tabuada do 2, O for é uma estrutura de repetição, ele tem como primeiro parâmetro
//um contador que é uma variavel criada dentro da estrutura, como segundo parâmetro ele tem
//a condição e como terceiro parâmetro tem uma incrementação, se não ele entra em loop infinito.
// Então, enquanto a condição for verdadeira ele repeti o bloco de codigo.
// i++ Significa "i = i + 1"
let valor = 0;
for (let i = 0; i <= 10; i++) {
    valor = i * 2 
    console.log ("2 x " + i + " = " + valor)
}


// Tabuada do 3, O "while" é uma estrutura de repetição, ele possue apenas uma condição
//dentro de sua estrutura, pôrem o contador é criado como uma variavel fora dele, e a 
//incrementação ao final do bloco, e enquanto a condição for verdadeira ele repeti o bloco de codigo
let x = 0;
let valor2 = 0;
while (x <= 10) {
    valor2 = x * 3 
    console.log ("3 x " + x + " = " + valor2)
    x++;
}

