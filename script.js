
let incre = document.querySelector(".incre");

let decre = document.querySelector(".decre");

let reset = document.querySelector(".reset");

let count = document.querySelector('.counter');

let counter = 0;

function NumIncre (){

    counter += 1;

    count.innerHTML = counter;

}

function NumDecre (){

    counter -= 1;

    count.innerHTML = counter;

}

function ResetAll(){

    counter = 0;

    count.innerHTML = counter;
}

incre.addEventListener('click', NumIncre);

decre.addEventListener('click', NumDecre);

reset.addEventListener('click', ResetAll);

