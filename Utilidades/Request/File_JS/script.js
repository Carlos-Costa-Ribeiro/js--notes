// =========================================== UPLOAD IMG ======================================

// O elemento "let image = document.querySelector('#arquivo').files[0];", recebe
//o primeiro arquivo de um "input", se tirar o "0" do "files[0]" ele pega multiplas 
//imagens.
// Para enviar uma imagem para algum local tem que ser no metodo "POST",
//a imagem é mandada pelo "header" de uma requisição, pelo "body".
// E tem de criar uma novo objeto utilizando "FormData()".
// E nos "headers" do "header" da requisição tem que conter "'Content-Type': 'multipart/form-data'"
async function enviar() {
    let image = document.querySelector('#arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Titulo da img');
    body.append('arquivo', image);

    let request = await fetch('https://www.cocacola.com.br/upload',{
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// Esse codigo, recebe uma imagem e mostra ela na tela, essa codigo "let img = document.createElement('img');"
//cria um elemento HTML no index, no caso uma "img" 
// "URL.createObjectURL(image)" serve para criar uma url a partir de um objeto que é um arquivo 
//(no caso a imagem do input file que nós pegamos do .files), assim nós podemos usar essa url que
// ele gera no "src" da imagem que a gente criou com o "createElement".
// "appendChild"  pega o elemento que ele receber como parâmetro e adiciona ao final do objeto
//que chamar ele, então no caso, ele vai adicionar a tag img que a gente criou com o createElement
//e adiciona como último filho do elemento selecionado com o getElementById.
function mostrar() {
    let image = document.getElementById("imagem").files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;
    document.getElementById("area").appendChild(img);
}


