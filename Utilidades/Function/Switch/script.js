// ----------------------------------------SWITCH---------------------------------------------------

// O "switch" funciona como o "if" pôrem ele é uma condicional simples que funciona com valores pré-definidos.

let dia = 1;
let diaName = "";

switch (dia) {
    case 1:
        diaName = "Segunda"
    break;
    case 2:
        diaName = "Terça"
    break;
    case 3:
        diaName = "Quarta"
    break;
    case 4:
        diaName = "Quinta"
    break;
    case 5:
        diaName = "Sexta"
    break;
    case 6:
    case 7:
        diaName = "Final de Semana"
    break;
    default: 
        diaName = "Digitou nada !!!"
}
console.log ("Hoje é " + diaName)

