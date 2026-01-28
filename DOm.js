// // what is DOM ?
// Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes, where each node corresponds to a part of the document, such as an element, attribute, or text.
// In JavaScript, you can interact with the DOM to manipulate HTML and CSS dynamically. This allows you to create interactive web pages by adding, removing, or modifying elements and their styles in response to user actions or other events.


 const paragraph=document.querySelector('#txt');
 const button=document.querySelector('#btn');
    const form = document.querySelector("#myForm");
    const input = document.querySelector("#nameInput");
const button1=document.querySelector('#btn1');
const button2=document.querySelector('#btn2');

 button.addEventListener('click',()=>{
    paragraph.textContent="Button Clicked! Text Changed.";
    paragraph.classList.toggle('active');
    });



    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const name = input.value;
        alert(`Form submitted! Name: ${name}`);
    });

    button1.addEventListener('click',()=>{
        const newElement=document.createElement('h1');
        newElement.textContent="This is a new element added to the DOM.";
        document.body.appendChild(newElement);
        button1.style.backgroundColor='green';
    });


    button2.addEventListener('click',()=>{
        if(button2.style.backgroundColor==='black'){
            button2.style.backgroundColor='blue';
        }else{
            button2.style.backgroundColor='red';
        }
    });