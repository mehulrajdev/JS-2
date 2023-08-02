console.log(document);

//document.body.children[1].children[0].href='https://google.com';
let anchorElement = document.getElementById("link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a");
anchorElement.href = "https://google.com";

//Add element
let newAnchor = document.createElement("a");
newAnchor.href = "https://google.com";
newAnchor.textContent = " This leads to Gooogle";
let firstParagraph = document.querySelector("p");
firstParagraph.append(newAnchor);

//Remove element
let firstH1Element = document.querySelector("h1");
firstH1Element.remove();

// inner HTML
console.log(firstParagraph.innerHTML);
