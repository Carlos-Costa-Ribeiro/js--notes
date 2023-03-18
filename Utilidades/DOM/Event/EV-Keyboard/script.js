// ============================================ EVENT KEYBOARD =============================================

// O evento de keydown, ira ser disparado quando uma tecla for clicada na pagina,
// o "e", se refere ao evento de disparo, ele te da informações sobre o evento em si.

window.addEventListener("keydown", (e) => {
    let el = document.querySelector(".div1");
    let teclaClicada = e.key;
    console.log(teclaClicada);
    if (teclaClicada === "a") {
        el.style.backgroundColor = "black";
    }
});

// O evento de keyup, ira ser disparado quando uma tecla for clicada e solta na pagina,
// o "e", se refere ao evento de disparo, ele te da informações sobre o evento em si.

window.addEventListener("keyup", (e) => {
    let el = document.querySelector(".div2");
    let teclaClicada = e.key;
    console.log(teclaClicada);
    if (teclaClicada === "a") {
        el.style.backgroundColor = "red";
    }
});

