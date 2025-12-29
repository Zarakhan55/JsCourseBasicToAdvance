// // A loop repeats a block of code multiple times until a condition becomes false.
// // for loop,Used when the number of iterations is known.
// for(let i=1;i<=5;i++){
//     console.log("For Loop Iteration:",i);
// }

// // while loop,Used when the number of iterations is not known beforehand.
// let j=1;
// while(j<=5){
//     console.log("While Loop Iteration:",j);
//     j++;
// }
// // do...while loop,Similar to while loop, but guarantees at least one execution.
// let k=1;
// do{
//     console.log("Do...While Loop Iteration:",k);
//     k++;
// }while(k<=5);

//food delivery Cart
let cart=["Pizza","Burger","Pasta","Salad","Sushi"];

console.log("Items in Cart:");
for(let x=0;x<cart.length;x++){
    console.log("-",cart[x]);
}

// ❓ Which loop is best?

// for → count known

// while → condition based

// do...while → must run once

// 
// Q1:print 1 to 10
for(let x=1;x<=10;x++){
    console.log("loop",x);
}
// Q2:print even numbers from 1 to 20
for(let x=1;x<=20;x++){
    if(x%2==0){
        console.log("even number:",x);
    }
    else{
        console.log("odd number:",x);
    }
}
// Q3:Print number once even if condition is false
let y=1;
do{
    console.log("do while loop:",y);
    y++;
}
while(y<=0);