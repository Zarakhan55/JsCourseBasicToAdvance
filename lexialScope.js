// // function can access variables that are defined where the function is written, not where it is called.
// //  Scope is decided at write time, not run time.








// let a = 10;

// function outer() {
//   let b = 20;

//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();
// /////////////////////////





// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   let a = 2;
//   foo();
// }

// bar();
// //////////////\\\\\\\\\\






// let a = 5;

// function outer() {
//   let a = 10;

//   function middle() {
//     let a = 15;

//     return function inner() {
//       console.log(a);
//     };
//   }

//   return middle();
// }

// let fn = outer();
// fn();







// //////////////
//  let x=6;
//   function out(){
//     let x=80;
//     function mid(){
//         let x=100;
//         return  function inn(){
//            console.log(x);
//         };
//     }
//     return mid();

//   }

//   let fun=out();
//   fun();



  //////////////
   let b=6;
   function sum(){
    let c=9;
    function com(){
        return function foo(){
            console.log(b+c);
        };

    }
    return com();
   }
   let coo=sum();
   coo();