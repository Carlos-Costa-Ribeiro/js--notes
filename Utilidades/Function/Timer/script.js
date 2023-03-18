// ------------------------------------------------ TIMER ----------------------------------------------------

// A função "setInterval(ShowTime, 1000)", como primeiro parâmetro recebe uma função
//para executar, e como segundo, uma quantidade de tempo em milisegundos para executar essa função,
//com o "setInterval" ele não para de ativar a função, então tem de usar o "clearInterval(timer);"
//que por sua vez ira parar o funcionamento do timer que estiver dentro do parâmetro.
let timer;

function comecar() {
    timer = setInterval(ShowTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function ShowTime() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let txt = h+':'+m+':'+s;
    console.log(txt);
}


// A função "setTimeOut(ShowTime2, 5000)", como primeiro parâmetro recebe uma função
//para executar, e como segundo, uma quantidade de tempo em milisegundos que ele ira esperar
//para executar essa função, com o "setTimeOut" ele ativa a função apenas uma vez e so quando 
//o tempo de espera definido se esgotar. Para cancelar o ativamento da função, use o "clearTimeout(timer2);",
//que ira cancelar a função, caso o tempo de ativação não tenha se esgotado.
let timer2;

function comecar2() {
    timer2 = setTimeout(ShowTime2, 5000);
}

function parar2() {
    clearTimeout(timer2);
}

function ShowTime2() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let txt = h+':'+m+':'+s;
    console.log(txt);
}
