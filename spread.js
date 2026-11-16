// let fruits=["apple","mango","banana"];
// console.log(...fruits);


// let boys = ["Ali", "Ahmed"];
// let girls = ["Sara", "Ayesha"];
// let student=[...boys,...girls];
// console.log(...student);





let fruits = ["Apple", "Banana", "Mango"];
const newFruits = ["Orange", "Grapes"];
const allFruits = [...fruits, ...newFruits];
console.log(allFruits);


let html = ["HTML", "CSS"];
let js = ["JavaScript", "React"];

let skill=[...html,...js];
console.log(skill);
let cart = ["Laptop", "Mouse", "Keyboard"];
let newCart =[...allFruits,"headphone"];
console.log(newCart);


let frontend = ["HTML", "CSS", "Bootstrap"];
let programming = ["JavaScript", "Python"];
let tools = ["Git", "GitHub"];
let skills = [...frontend, ...programming, ...tools];
console.log(skills);
