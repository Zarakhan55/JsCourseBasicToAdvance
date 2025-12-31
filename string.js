// // 1️⃣ What is a String?   A string is text written inside quotes.
// // 2️⃣ String Length
// let msg="Hello my friends";
// console.log("Length:", msg.length); // Length


// // 3️⃣ Change Case
// text="JavaScript is Fun!";
// console.log("Uppercase:", text.toUpperCase());
// console.log("Lowercase:", text.toLowerCase());

// // 4️⃣ slice() – Get Part of String
// let phrase="Learning JavaScript is Awesome!";
// let part=phrase.slice(9,19);
// console.log("Sliced Part:", part); // "JavaScript"
// console.log(phrase.slice(0,4));

// // 5️⃣ replace() – Replace Text
// let line = "I love JS";
// console.log(line.replace("JS", "JavaScript"));

// // 6️⃣ includes() – Check Text
// let email = "user@gmail.com";
// console.log(email.includes("@")); // true

// // 7️⃣ trim() – Remove Spaces
// let texts = "   Hello World   ";
// console.log(texts.trim());



// Q1
let user = "Zara";
let age = 22;

console.log(`My name is ${user} and I am ${age} years old`);




// Q2
let userName="zara khan";
let password="12345";

if(userName.length>=5 && password.length>=5){
    console.log("Valid");
}else{
    console.log("Invalid");
}

