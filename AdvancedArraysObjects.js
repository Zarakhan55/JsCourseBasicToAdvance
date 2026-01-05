// find() – Get FIRST matching element,Returns one element, not array,Stops after first match
let users =[
    {name:"Alice", age:25},
    {name:"Bob", age:30},
    {name:"Charlie", age:35}
];
let result=users.find(user=>user.age>28);
console.log(result); // {name:"Bob", age:30}



//  some() – Check if ANY element matches
let mark=[20,30,40,50,60];
let pass=mark.some(score=>score>=40);
console.log(pass); // true



// every() – Check if ALL elements match
let scores=[45,55,65,75];
let allPass=scores.every(score=>score>=40);
console.log(allPass); // true





//sort() – Sort elements in place
let fruits=["Banana","Apple","Mango","Orange"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


let nums=[40,10,50,2,4];
nums.sort((a,b)=>a-b);
console.log(nums); // [2, 4, 10, 40, 50]
