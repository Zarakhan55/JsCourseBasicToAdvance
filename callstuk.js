// What is Call Stack?

// ➡ A stack that manages function execution.

// Q2 Why stack overflow happens?

// ➡ Too many function calls without ending.

// Q3 Does JS have one call stack?

// ➡ Yes, single-threaded









function x(){
    console.log("X start");
    Y();
    console.log("X End");
}
function Y(){
    console.log("Y start");
}
x();