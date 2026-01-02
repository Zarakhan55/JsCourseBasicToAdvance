let num=8;
if(num<0){
    console.log("Negative Number");
}
else if(num===0){
    console.log("Zero");
}
else{
    console.log("Positive Number");
}



// .......................

age=25;
if(age<18){
    console.log("Not Eligible to Vote");
}
else{
    console.log("Eligible to Vote");
}

////...............

for(let x=5;x>0;x--){
    console.log(x);
}

//.........
// Print only odd numbers between 1 and 15.
for(let i=1;i<=15;i++){
    if(i%2!==0){
        console.log(i+" is an odd number");
    }
}
// Create a function that:

// Takes 2 numbers

// Returns the larger number


function largerNumber(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

console.log(largerNumber(10,20));

// Write an arrow function to check if a number is even.
const isEven=(num)=>{
    return num%2===0;
}
console.log(isEven(4)); // true


//...............
let nums = [2, 4, 6, 8];
console.log("Original Array:", nums);
nums.push(10);
console.log("After Push:", nums);
nums.pop();
console.log("After Pop:", nums);



///....[1, 2, 3, 4] use map
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(num){
    return num * num;
});

console.log("Squared Numbers:", squaredNumbers); // [1, 4, 9, 16]


// Use filter() to get numbers > 5:
let values = [3, 6, 9, 12, 15];
let filterNo=values.filter(function(num){
    return num>5;
});

console.log("Filtered Numbers:", filterNo); // [6, 9, 12, 15]











// Create an object user with:

// name

// email
// Add a method display().

let user={
    name:"Zara Khan",
    email:"zarA@gmail.com",
    display:function(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}
user.display();

// Loop through object properties using for...in.
for(let key in user){
    console.log(`${key}: ${user[key]}`);
}

//......
let msg = "  hello javascript  ";
console.log(msg.trim().toUpperCase());

// Create a message using template literals:

// "Welcome Zara, your cart total is 150

let userName = "Zara";
let cartTotal=159;
console.log(`Welcome ${userName}, your cart total is ${cartTotal}`);