// Example 1: Basic Default Parameter
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Zara"); // Hello Zara
greet();       // Hello Guest

// Example 2: Default with Numbers
function calculatePrice(price, tax = 0.1) {
  return price + (price * tax);
}

console.log(calculatePrice(1000));     // 1100
console.log(calculatePrice(1000, 0.2)); // 1200
// Rest + Default Together
function orderSummary(discount = 0, ...prices) {
  let total = prices.reduce((sum, p) => sum + p, 0);
  return total - discount;
}

console.log(orderSummary(50, 200, 300, 100)); // 550

//1
function maxNumber(large){
    return large.Maximun
}
maxNumber(5, 12, 3, 20, 8); // 20
