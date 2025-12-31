// // // An object stores data in key–value pairs.
// // let user ={
// //     name:"zara",
// //     age:25,
// //     city:"New York"
// // };

// // //  Accessing Object Properties
// // console.log(user.name);
// // //  Bracket notation is useful when key is dynamic.
// // console.log(user["age"]);

// // // Updating & Adding Properties
// // user.age = 26; // Update
// // user.country = "USA"; // Add new property
// // console.log(user);
// // delete user.city;
// // console.log(user);




// // // Object Methods (Functions Inside Objects)

// // let person={
// //     firstName:"John",
// //     lastName:"Doe",
// //     fullName:function(){
// //         return this.firstName + " " + this.lastName;
// //     }
// // }
// // console.log(person.fullName());

// // // Looping Through Objects
// // for(let key in user){
// //     console.log(key + ": " + user[key]);
// // }


// // let product={
// //     id:102,
// //     name:"laptop",
// //     price:1500,
// //     discount:function(percent){
// //         return this.price - (this.price * percent / 100);
// //     }

// // }

// // console.log("Discounted Price:", product.discount(10));

// // // Object → named keys

// // // Array → indexed values

// // Q1
// let students={
//     name:"Aluice",
//     age:21,
//     mark:88
// }
// console.log(students);
// // Q2
// students.mark=92;
// students.subject="Maths";
// console.log(students);
// // Question 3:Add a method introduce() that prints:"Hi, I am <name>"
// students.introduce=function(){
//     console.log("Hi, I am " + this.name);
// };
// students.introduce();

// // Create a method to calculate total price.
// let item={
//     name:"Phone",
//     price:800,
//     taxRate:0.1,
//     totalPrice:function(){
//         return this.price + (this.price * this.taxRate);
//     }
// };
// console.log("Total Price:", item.totalPrice());


// Q...level-1
let car={
    brand:"Toyota",
    model:"Camry",
    year:2020,
    Info:function(){
        return this.brand+ " " + this.model + " " + this.year;
    }
}
car.year=2021;
car.color="Red";
console.log(car.Info());
delete car.model;
console.log(car.Info());

// Q...level-2
// Create an object user with:

// name

// isLoggedIn
// Add a method login() that prints:

// "Zara has logged in"
let user={
    name:"Zara",
    isLoggedIn:false,
    login:function(){
        this.isLoggedIn=true;

        console.log(this.name + " has logged in");
    }
}
user.login();

// Create an object rectangle with:

// width

// height
// Add a method to calculate area.
let rectangle={
    width:5,
    height:10,
    area:function(){
        return this.width * this.height;
    }
};
console.log("Area of Rectangle:", rectangle.area());

//  LEVEL 3: REAL-LIFE OBJECTS

let order={
    itemName:"burger",
    quantity:2,
    pricePerItem:5,
    totalprice:function(percent){
        let tot= this.quantity*this.pricePerItem;
        return tot - (tot * percent / 100);
    }
}
console.log("Total Order Price:", order.totalprice(10));






// Create an object counter with:

// count = 0
// Add methods:

// increment()

// decrement()

let counter={
    count:0,
    increment:function(){
        this.count++;
    },
    decrement:function(){
        this.count--;
    }
};
counter.increment();
counter.increment();
console.log("Count after incrementing twice:", counter.count);
counter.decrement();
console.log("Count after decrementing once:", counter.count);















// Create an object bankAccount with:

// accountHolder

// balance
// Add:

// deposit(amount)

// withdraw(amount)
// Prevent withdrawing more than balance.
let bankAccount={
    accountHolder:"John Doe",
    balance:1000,
    deposit:function(amount){
        this.balance +=amount;
    },
    withdraw:function(amount){
        if(amount > this.balance){
            console.log("Insufficient balance");
        }else{
            this.balance -=amount;
        }
    }
};
bankAccount.deposit(500);
console.log("Balance after deposit:", bankAccount.balance);
bankAccount.withdraw(2000);