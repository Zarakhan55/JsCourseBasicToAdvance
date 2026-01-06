// 🔹 1. What is Copy vs Reference?
// ✅ Definition

// Copy → creates a new memory value

// Reference → points to the same memory location
//////////////////////////////////
// Primitive Types → COPY
// Examples: number,string,boolean,null,undefined
////////////////////////////
// Non-Primitive Types → REFERENCE
// Examples:array,object,function
////////////////
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

//////////////////////////////Fix this code so changing copyArr does NOT affect originalArr.
let originalArr = [5, 10, 15];
let copyArr = [...originalArr]; 

copyArr.push(70);

// replace 70 with 90
copyArr[copyArr.indexOf(70)] = 90;

console.log("Original:", originalArr); // [5, 10, 15]
console.log("Copy:", copyArr);         // [5, 10, 15, 90]
