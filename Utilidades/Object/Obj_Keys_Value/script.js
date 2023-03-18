// ------------------------------------------------Obj Keys-Value ----------------------------------------
// O comando "Object.keys(x)" vai pegar as chaves do elemento "x" ou seja seus indices
//por se tratar de um array
let x = [1,2,3,4,5];
let xx = Object.keys(x);
console.log(xx);

// O comando "Object.keys(x1)" vai pegar os valores do elemento "x1" 
let xx1 = Object.value(x);
console.log(xx1);

// O comando "Object.keys(y)" vai pegar as chaves do elemento "y" ou seja seus "brands"
//por se tratar de um obj
let y = {
    nome:"Carlos",
    idade:19
};
let yy = Object.keys(y);
console.log(yy);

// O comando "Object.keys(y1)" vai pegar os valores do elemento "y1" 
let y1 = {
    nome:"Carlos",
    idade:19
};
let yy1 = Object.values(y1);
console.log(yy1);

