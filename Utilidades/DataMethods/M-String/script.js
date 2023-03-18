 // ----------------------------------------------- METHOD STRING ------------------------------------------------------

let mainString = "Carlos Daniel Costa Ribeiro";

// O comando MainString.length, retorna o valor que corresponde ao total de caracteres dentro da string em questão.
let mainStringLenght = mainString.length;
console.log(mainStringLenght);


// O comando indexOf("Daniel"), retorna o valor que corresponde em que local da string se iniciou o parâmetro.
// Caso a string não possua o parâmetro requisitado ela retorna valor -1.
let mainStringIndexof = mainString.indexOf("Daniel");
console.log(mainStringIndexof);


// O comando slice(10,20), tem como primeiro parâmetro o inicio de contagem da string
//e como segundo parâmetro o final de contagem de uma string, assim retornando os caracteres
//que estiverem entre os dois parâmetros.
// Caso não seja definido o segundo parâmetro ele pega todo apartir do primeiro.
// Ele tambem pode pegar numeros negativos, que começa a contagem do fim para o início.
let mainStringSlice = mainString.slice(-10,-15);
console.log(mainStringSlice);


// O comando replace("Daniel","Ragnar"), troca o primeiro parâmetro, pela segundo dentro da string em questão.
let mainStringReplace = mainString.replace("Daniel","Ragnar");
console.log(mainStringReplace);


// O comando toUpperCase(), coloca todos os caracteres da string em questão em caixa alta.
let mainStringTouppercase = mainString.toUpperCase();
console.log(mainStringTouppercase);


// O comando toLowerCase(), coloca todos os caracteres da string em questão em caixa baixa.
let mainStringTolowercase = mainString.toLowerCase();
console.log(mainStringTolowercase);


// O comando trim(), retira todos os possiveis espaços vazios da string em questão.
let mainStringTrim = mainString.trim();
console.log(mainStringTrim);


// O comando split(" "), divide a string pelo parâmetro indicado, assim a transformando-a em um array.
let mainStringSplit = mainString.split(" ");
console.log(mainStringSplit); 


// O comando repeat(10), repeti uma determinada String pelo numero indicado no parâmetro.
let mainStringRepeat = mainString.repeat(10);
console.log(mainStringRepeat);


// O comando padStart(), recebi como primeiro parâmetro a quantidade de caracteres que a string em questão devera conter
//e o segundo parâmetro se refere ao caractere que vai ser adicionado no inicio da string, para que ela consiga a quantidade
//de caracteres espeficificado no primeiro parâmetro.
let mainStringPadStart = mainString.padStart(50, "$")
console.log(mainStringPadStart);


// O comando padEnd(), recebi como primeiro parâmetro a quantidade de caracteres que a string em questão devera conter
//e o segundo parâmetro se refere ao caractere que vai ser adicionado no final da string, para que ela consiga a quantidade
//de caracteres espeficificado no primeiro parâmetro.
let mainStringPadEnd = mainString.padEnd(50, "$")
console.log(mainStringPadEnd);










