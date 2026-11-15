// let std={
//     name:"zara",
//     age:22,
//     batch1:88

// };
// let {name,age,batch1:btc}=std;
// console.log(name,age,btc);






// let no=[20,30,20,22,89,90,87,22,8,90,66];
// function cal([a,b,c,d,e,f,g,h,i,j,k]){
//     console.log(a,b,c,d,e,f,g,h,i,j,k);
// }
// cal(no);                                                                                                                                                                                                  


// const students = [
//     "Ali",
//     "Ahmed",
//     "Sara",
//     "Ayesha",
//     "Usman",
//     "Hassan",
//     "Fatima",
//     "Zain",
//     "Hamza",
//     "Areeba",
//     "Bilal",
//     "Hira",
//     "Saad",
//     "Maryam",
//     "Omar",
//     "Noor",
//     "Danish",
//     "Zoya",
//     "Farhan",
//     "Sana"
// ];
// function use(a,b,c){
//     console.log(a,b,c);
// }
// use(...students);









// const user = {
//     name: "Ali",
//     age: 22,
//     city: "Karachi",
//     country: "Pakistan",
//     email: "ali@gmail.com",
//     course: "JavaScript", 
//     university: "University of Karachi",
//     grade: "A"
// };

// function std({ name, age, city, grade }) {
//     console.log(name, age, city, grade);
// }

// std({...user});


let num = [10, 20, 30, 34, 50];

function add(...num) {
    return num.reduce((total, acc) => {
        return total + acc;
    }, 0);
}

console.log(add(...num)); 









