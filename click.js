let paragraphElement = document.querySelector('p');


function  changeParagraph(){
    paragraphElement.textContent='Clicked !';
}

paragraphElement.addEventListener('click',changeParagraph);

let inputElement =document.querySelector('input');

function  retrieveUser(){
    let enteredText =inputElement.value;
    console.log(enteredText);
}

inputElement.addEventListener('input',retrieveUser);



