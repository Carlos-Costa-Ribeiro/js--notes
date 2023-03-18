// ----------------------------------------------- DATA DEFINITION ---------------------------------------------------

// A função "new Date()" cria automaticamente um objeto que corresponde a data atual do momento em que aquela variavel
//foi criada.
let data = new Date();
console.log(data)

// Maneira de criar a data diferente.
let data0 = Date.now();
console.log(data0)

// A função "data1.toUTCString()" defini a data recebida sem o fuso horário, ele converte em hora europeia "-3h".
let data1 = new Date();
let data1_1 = data1.toUTCString();
console.log(data1_1)

// A função "data2.toDateString()" compacta a hora recebida, deixa mais simples.
let data2 = new Date();
let data2_1 = data1.toDateString();
console.log(data2_1)


// A data pode receber parâmetros que correspondem a Ano, mês, dia, hora, minutos, segundos.
// O minimo para definir uma data é o mês e o ano.
// O mês em JS começa a ser contado do "0" então sempre dimunua um numero para definir o mês necessário.
let data3 = new Date(2002,8,11,11,45,30);
let data3_1 = data3.toString();
console.log(data3_1)

// Apenas outra maneira de definir os parâmetros.
let data4 = new Date("2002-8-11 11:45:30");
console.log(data4) 

// ----------------------------------------------- DATA MANIPULATION ---------------------------------------------------

//As funçoes após "data5. ..." pegam o momento especifico da data já criada
let data5 = new Date();
let novoValor = data5.getFullYear(); // ANO
let novoValor0 = data5.getMonth(); // MÊS
let novoValor1 = data5.getDay(); // DIA DA SEMANA
let novoValor2 = data5.getDate(); // DIA
let novoValor3 = data5.getHours(); // HORAS
let novoValor4 = data5.getMinutes(); //MINUTOS
let novoValor5 = data5.getSeconds(); // SEGUNDOS
let novoValor6 = data5.getMilliseconds(); // MILISEGUNDOS
let novoValor7 = data5.getTime(); // TIME STAMP, NUMERO DE MILLISEGUNDOS APÓS 1970
console.log(novoValor);
console.log(novoValor1);
console.log(novoValor2);
console.log(novoValor3);
console.log(novoValor4);
console.log(novoValor5);
console.log(novoValor6);

//As funçoes após "data5. ..." setam o momento especifico da data já criada
//É possivel fazer sobretração e soma dentro dos parâmetros tbm
let data6 = new Date();
let novoValor11 = data6.setFullYear(2030); // ANO
let novoValor12 = data6.setMonth(11); // MÊS
let novoValor13 = data6.setDay(6); // DIA DA SEMANA
let novoValor14 = data6.setDate(15); // DIA
let novoValor15 = data6.setHours(8); // HORAS
let novoValor16 = data6.setMinutes(30); //MINUTOS
let novoValor17 = data6.setSeconds(45); // SEGUNDOS
let novoValor18 = data6.setMilliseconds(900); // MILISEGUNDOS
let novoValor19 = data6.setdate( data6 - 3); // TIME STAMP, NUMERO DE MILLISEGUNDOS APÓS 1970
console.log(novoValor11);
console.log(novoValor12);
console.log(novoValor13);
console.log(novoValor14);
console.log(novoValor15);
console.log(novoValor16);
console.log(novoValor17);
console.log(novoValor18);