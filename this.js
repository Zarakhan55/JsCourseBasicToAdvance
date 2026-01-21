// console.log(this);
// const user={
//     name:"zara",
//     greet(){
//         console.log(this.name);
//     }
// };
// user.greet();









const user = {
  name: "Zara",
  greet() {
    console.log(this.name);
  }
};

const sayHello = user.greet;
sayHello();
// this depends on how a function is called, NOT where it is written.