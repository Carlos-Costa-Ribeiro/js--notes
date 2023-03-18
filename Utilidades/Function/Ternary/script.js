// --------------------------------------------- TERNARY ---------------------------------------------

// Regra para condicionais (==) e (===):
// A condição  "==", verica se uma elemento é igual, pôrem aceita "strings" numeradas.
// A condição  "===", verica se uma elemento é igual, pôrem é mais restritiva e aceita apenas "numbers".
let idade = "88";
if (idade == 88) {
    console.log("Você tem 88 anos")
}

let idade2 = "88";
if (idade2 === 88) {
    console.log("Você tem 88 anos")
} else {
    console.log("Não aceitamos 'strings' ")
}

// Condicional ternária, o "?" define que é um ternario, o proximo elemento é 
//se a condição retornar verdadeiro e sucessor se retornar falso. 
let isMember = true;
let z2z = ((isMember == false) ? "Parabéns vc é membro" : "Tu não é membro");
console.log(z2z);