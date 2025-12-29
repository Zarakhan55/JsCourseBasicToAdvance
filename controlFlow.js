// 
// if condition,Runs code only if condition is true.
let age=20;
if(age>=18){
    console.log("You are an adult.");
}

// if...else,..Runs one block if condition is true, another if false.

let mark=75;
if(mark>=50){
    console.log("You passed the exam.");
}
else{
    console.log("You failed the exam.");
}

//  else if (Multiple Conditions)
let score=85;
if(score>=90){
    console.log("Grade A");
}
else if(score>=80){
    console.log("Grade B");
}
else if(score>=70){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}

// switch statement,Selects one of many code blocks to be executed.
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//--practice food ordering system--//
let orderSattus="preparing";
switch(orderSattus){
    case "received":
        console.log("Order received. We are preparing your food.");
        break;
        case "preparing":
        console.log("Your food is being prepared.");
        break;
        case "out for delivery":
        console.log("Your food is out for delivery.");
        break;
        case "delivered":
        console.log("Your food has been delivered. Enjoy your meal!");
        break;
        default:
        console.log("Unknown order status.");
}

// ❓ When to use switch instead of if-else?
// Use switch when you have multiple conditions based on a single variable and want to execute different code blocks for each condition. Switch statements are more readable and efficient than multiple if-else if blocks when dealing with discrete values.

// Question 1:Check if number is positive, negative, or zero
let num=0;
if(num>0){
    console.log("Positive number.");
}
else if(num<0){
    console.log("Negative number.");
}
else{
    console.log("Zero.");
}

// Question 2:Input: "admin", "user", "guest"Print different messages for each role
let role="user";
switch(role){
    case "admin":
        console.log("Welcome, Admin! You have full access.");
        break;
        case "user":
        console.log("Welcome, User! You have limited access.");
        break;
        case "guest":
        console.log("Welcome, Guest! Please sign up for more features.");
        break;
        default:
        console.log("Unknown role.");
}

// Question 3:Shopping Cart If:

// cartItems = 0 → "Cart is empty"

// cartItems > 0 → "Proceed to checkout"

// Use if-else.
let cartItems=3;
if(cartItems==0){
    console.log("your Cart is empty.");
}
else{
    console.log("Proceed to checkout.");
}