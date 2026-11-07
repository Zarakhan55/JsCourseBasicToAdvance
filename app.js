var head = document.querySelector("#hd");
head.style.color="red";



var heads = document.querySelectorAll("h2, h3, h4, h5");

heads.forEach(function(element) {
    element.style.color = "blue";
   
});

var element = document.createElement("h3");
element.style.display="none";
element.textContent = "Your text";

document.body.appendChild(element); 
var box = document.querySelector("#box");

console.log(box.textContent);

console.log(box.innerText);