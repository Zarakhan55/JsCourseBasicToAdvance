// Q1️⃣ Why use getter/setter?
// 👉 To control and validate data access

// Q2️⃣ Are getters functions?
// 👉 Yes, but used like properties

// Q3️⃣ Can we use setter without getter?
// 👉 Yes

// Q4️⃣ Why use _ before variable?
// // 👉 Convention to avoid infinite loop
// Getter → used to get (read) a value

// Setter → used to set (update) a value

// They look like functions but are used like properties

// Getter → used to get (read) a value
// Setter → used to set (update) a value
// They look like functions but are used like properties


class User{
    constructor(name){
        this._name=name; // _ to avoid infinite loop
    }

    get name(){
        return this._name;
    }
    set name(newname){
        this._name=newname;
    }
    
}

let u=new User("John");
console.log(u.name); // Getter called
u.name="Doe"; // Setter called
console.log(u.name); // Getter called












// Create a Product class

// private price _price

// getter to read price

// setter to block price < 0

class Product{
    constructor(price){
        this._price=price;
    }
    get price(){
        return this._price;
    }
    set price(newprice){
        if(newprice<0){
            console.log("Invalid Price");
        }
        else{
            this._price=newprice;
        }
}}
let p=new Product(100);
console.log(p.price);
p.price=1999;
console.log(p.price);