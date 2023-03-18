// ============================================ EVENT SCROLL =============================================

// O evento de scroll, vai disparar uma função quanto o scroll da tela for movimentado.

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");

window.addEventListener("scroll", (e) => {
    div1.style.backgroundColor = "green";
    div2.style.backgroundColor = "red"

});



