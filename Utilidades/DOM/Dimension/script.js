// --------------------------- DIMENSION ------------------------------------

// Esse comando ".offsetWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda e a barra de rolagem, mas desconsiderando o SCROLL total do conteúdo inferior.
document.querySelector(".texto").offsetWidth;

// Esse comando ".offsetHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda e a barra de rolagem, mas desconsiderando o SCROLL total do conteúdo inferior.
document.querySelector(".texto").offsetHeight;

// Esse comando ".clientWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda, mas desconsiderando o SCROLL total do conteúdo e a barra de rolagem.
document.querySelector(".texto").clientWidth;

// Esse comando ".clientHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda, mas desconsiderando o SCROLL total do conteúdo e a barra de rolagem.
document.querySelector(".texto").clientHeight;

// Esse comando ".scrollWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda e SCROLL TOTAL, mas desconsiderando a barra de rolagem.
document.querySelector(".texto").scrollWidth;

// Esse comando ".scrollHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda e SCROLL TOTAL, mas desconsiderando a barra de rolagem.
document.querySelector(".texto").scrollHeight;
