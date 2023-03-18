// ---------------------------ATRIBUTE------------------------------------

// Esse comando ".setAttribute("src", filename)" altera o valor de um atributo
//especifico de um elemento em questão.
// O primeiro parâmetro é o atributo que recebera um novo valor, ou que sera criado.
// O segundo é um valor ou váriavel que substituira o valor original dentro do atributo.

document.querySelector("#imagem").setAttribute("src", filename)


// Esse comando seleciona um elemento DOM e grava o valor de algum
//atributo, assim podendo passa-lo para uma variavel.

let animal = document.querySelector("#imagem").getAttribute("data-animal");