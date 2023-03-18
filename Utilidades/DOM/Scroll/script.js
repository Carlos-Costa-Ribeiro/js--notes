// --------------------------- SCROLL ------------------------------------

// Esse comando ".scrollTop;" verifica a posição do SCROLL Vertical do elemento, que é o mais comum.
document.querySelector(".texto").scrollTop;

// Esse comando ".scrollLeft;" verifica a posição do SCROLL Horizontal do elemento.
document.querySelector(".texto").scrollLeft;

// Altera a posição inicial do SCROOL do elemento, o primeiro parâmetro altera o Horizontal.
// e o segundo parâmetro altera a Vertical
document.querySelector(".texto").scrollTo(0,0)

// Altera a posição da tela, o primeiro parâmetro altera o Horizontal.
// e o segundo parâmetro altera a Vertical
window.scrollTo(0,0)

// Esse comando verifica qual é a posição do SCROLL da window da pagina, tanto vertical quanto horizontal.
window.scrollY;
window.scrollX;