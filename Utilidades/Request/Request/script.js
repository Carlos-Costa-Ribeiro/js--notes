// ========================================== REQUISIÇÕES =======================================

//----------------------------------------------- GET -------------------------------------------

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");


btn1.addEventListener("click", (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( (response) => response.json())
        .then( (result) => {
            result.map( (item) => {
                console.log(item.name);
            });
        })
        .catch( (error) => {
            console.log(` ERROR : ${error}`);
        });

});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
        name: "Calisto",
        method: "POST",
        token: "12345"
    })
        .then((response) => response.json())
        .then((result) => {
            result.map((item) => {
                console.log(item.name);
            });
        })
        .catch((error) => {
            console.log(` ERROR : ${error}`);
        });
});




