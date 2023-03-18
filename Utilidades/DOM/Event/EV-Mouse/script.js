// ============================================ EVENT MOUSE =============================================

// O evento de mouseover, dispara uma função quando o mouse é passado por cima do elemento que
//recebeu o listener.

let div1 = document.querySelector("#div1");

div1.addEventListener("mouseover", (e) => {
    div1.style.backgroundColor = "red";

});

div1.addEventListener("mouseout", (e) => {
    div1.style.backgroundColor = "black";
    
});


// O evento de mouseout, dispara uma função quando o mouse é tirado de cima do elemento que
//recebeu o listener.

let div2 = document.querySelector("#div2");

div2.addEventListener("mouseover", (e) => {
    div2.style.backgroundColor = "black";

});

div2.addEventListener("mouseout", (e) => {
    div2.style.backgroundColor = "red";

});


// O evento de click, dispara uma função quando o elemento que recebeu o listener for clicado.

let div3 = document.querySelector("#div3");

div3.addEventListener("click", (e) => {
    div3.style.backgroundColor = "purple";
    
});


