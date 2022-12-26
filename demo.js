let productName =document.getElementById('product-name');
let remainingChars = document.getElementById('remaining-chars');

let maxAllowed = productName.maxLength;

function updateRemaining(event){
    let enteredText =event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacter = maxAllowed - enteredTextLength;
    remainingChars.textContent =remainingCharacter;
}

productName.addEventListener('input',updateRemaining);