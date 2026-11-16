// let skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];

// // Destructure:
// // first = HTML
// // second = CSS
// // remaining = JavaScript, React, Bootstrap

// let [first,second, ...remaining] = skills;

// console.log(first);
// console.log(second);
// console.log(remaining);


// let employee = {
//     name: "Zara",
//     age: 22,
//     salary: 60000,
//     city: "Karachi",
//     department: "IT"
// };

// // name ko separate nikalo
// // remaining properties ko otherDetails mein collect karo
// let { name, ...otherDetails } = employee;

// console.log(name);
// console.log(otherDetails);


// function calculateTotal(...prices) {
//     let total = prices.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 0);

//     console.log(total);}
// calculateTotal(100, 200, 300, 400, 500);

// // Expected output: 1500







function calculateTotal(...prices) {
let total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
    // Use reduce()
    // Calculate total
    // Print total
console.log(total);
}

calculateTotal(500, 1000, 1500, 2000);