// ---------------------------CLASSLIST------------------------------------

// Esse comando ".classList.add("style-css")" seleciona um elemento html e adiciona os elementos css,
//de uma class ou id.

document.querySelector("h1").classList.add("style-css");

// Esse comando ".classList.remove("style-css")" seleciona um elemento html e remove os elementos css,
//de uma class ou id.
document.querySelector("h1").classList.remove("style-css");

// Esse comando ".classList.contains("style-css")" seleciona um elemento html 
//e verifica se contem um elemento css.
document.querySelector("h1").classList.contains("style-css");

// Esse comando ".style.display = "none"" presupoe que o elemento html selecionado
//possui uma class no style do css, então ele entra na class do elemento html e 
//altera o valor de uma propriedade definida dentro da class, por outro valor.
document.querySelector("h1").style.display = "none";
