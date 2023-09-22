const productName =document.getElementById('product-name');
const remainingChars = document.getElementById('remaining-chars');
const maxAllowed = productName.maxLength;

function updateRemaining(event){
    let enteredText =event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacter = maxAllowed - enteredTextLength;
    remainingChars.textContent =remainingCharacter;
}

productName.addEventListener('input',updateRemaining);
