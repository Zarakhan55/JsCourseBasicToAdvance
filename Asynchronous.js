// // // Asynchronous JavaScript allows long-running tasks (API calls, timers, file loading) to run without blocking the main thread.
// // //  JavaScript does not wait for these tasks to finish.


// // // // setTimeout() (Basic Async)
// // // console.log("Start");
// // // setTimeout(()=>{
// // //     console.log("procesing........");
// // // },2000);
// // // console.log("end");
// // // //////////////////////////////
// // // // Callback Functions
// // // // A callback is a function passed into another function to run later.
// // // function fetchData(callback) {
// // //   setTimeout(() => {
// // //     callback("Data received");
// // //   }, 2000);
// // // }

// // // fetchData((data) => {
// // //   console.log(data);
// // // // });
// // // // ///////////////////////////
// // // // // Promises
// // // // //A Promise is an object that represents a future value.
// // // // // A Promise represents a value that will be:,✔ fulfilled,❌ rejected


// // // // let promise = new Promise((resolve, reject) => {
// // // //   let success = true;

// // // //   setTimeout(() => {
// // // //     if (success) {
// // // //       resolve("Order Delivered");
// // // //     } else {
// // // //       reject("Order Failed");
// // // //     }
// // // //   }, 2000);
// // // // });

// // // // promise
// // // //   .then(result => console.log(result))
// // // //   .catch(error => console.log(error));




// // // //   | State     | Meaning       |
// // // // | --------- | ------------- |
// // // // | pending   | Still working |
// // // // | fulfilled | Success       |
// // // // | rejected  | Failed        |

// // //   ///////////////////////////
// // // //   Definition:async/await is a modern way to handle promises like synchronous code.
// // // function getOrder() {
// // //   return new Promise(resolve => {
// // //     setTimeout(() => {
// // //       resolve("Food Ready");
// // //     }, 2000);
// // //   });
// // // }

// // // async function showOrder() {
// // //   let result = await getOrder();
// // //   console.log(result);
// // // }

// // // showOrder();
// // // // Error Handling with try...catch
// // // async function loadData() {
// // //   try {
// // //     let data = await fetchData();
// // //     console.log(data);
// // //   } catch (error) {
// // //     console.log("Error:", error);
// // //   }
// // // }
// // ///////////////////////////////////////////////////////////////

// // let foodOrder = new Promise((resolve,reject)=>{
// //   let Delivered=true;
// //   setTimeout(()=>{
// //     if(Delivered){
// //       resolve("Food Deliverd....");
// //     }
// //     else{
// //       reject("On the way.......");
// //     }
// //   },2000);
// // })
// // // Consuming a Promise (then & catch)
// // foodOrder
// //   .then(result => {
// //     console.log(result);
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   });
// // /////////////////////////////////////
// // // Promise Chaining
// // function step1() {
// //   return Promise.resolve("Step 1 done");
// // }

// // function step2(msg) {
// //   return Promise.resolve(msg + " → Step 2 done");
// // }

// // step1()
// //   .then(result => step2(result))
// //   .then(final => console.log(final));
// // ///////////////////////////////
// // function fetchUser() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve({ name: "Zara", age: 22 });
// //     }, 2000);
// //   });
// // }

// // fetchUser()
// //   .then(user => console.log(user.name))
// //   .catch(err => console.log(err));
// // //Same code using async/await:

// // async function getUser() {
// //   try {
// //     let user = await fetchUser();
// //     console.log(user.name);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // getUser();
// ///////////////////Create a Promise checkLogin that:

// // Resolves "Login Success" if isLoggedIn = true

// // Rejects "Login Failed" otherwise
// let checkLogin = new Promise((resolve, reject) => {
//   let isLoggedIn = true;

//   setTimeout(() => {
//     if (isLoggedIn) {
//       resolve("Login Success ");
//     } else {
//       reject("Login Failed ");
//     }
//   }, 2000);
// });

// checkLogin
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
// //////////////////////////////////////////////

function loadData(){
  return new Promise(resolve =>{
    console.log("before.")
    setTimeout(()=>{
      resolve("Data Loaded..");
    },2000);
  });
}
async function show() {
  let rslt=await loadData();
  console.log(rslt);
}
show();
//////////////////////// 
function checkLogin() {
  return new Promise((resolve, reject) => {
    let isLoggedIn = false;

    setTimeout(() => {
      if (isLoggedIn) {
        resolve("Welcome User");
      } else {
        reject("Access Denied");
      }
    }, 1500);
  });
}

async function loginUser() {
  try {
    let msg = await checkLogin();
    console.log(msg);
  } catch (error) {
    console.log("Error:", error);
  }
}

loginUser();
