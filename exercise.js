let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];
console.dir(h1Element);

console.dir(h1Element.parentElement);

console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById("first-title");
console.dir(h1Element);

let paragraph = document.querySelector(".paragraph");
console.dir(paragraph);

paragraph.textContent = "hello mehul";
