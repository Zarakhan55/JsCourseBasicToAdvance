
// // 👉 Promise.all() runs multiple Promises at the same time (parallel)
// // 👉 It waits until ALL promises are resolved
// // 👉 If one fails → all fail

// let p1 = new Promise(resolve => {
//   setTimeout(() => resolve("Data 1"), 1000);
// });

// let p2 = new Promise(resolve => {
//   setTimeout(() => resolve("Data 2"), 1500);
// });

// let p3 = new Promise(resolve => {
//   setTimeout(() => resolve("Data 3"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log(results); // ["Data 1", "Data 2", "Data 3"]
//   })
//   .catch(error => console.log(error));
// // 🔹 Example 2: Promise.all with async/await
// function task1() {
//   return new Promise(resolve => setTimeout(() => resolve("Task 1 Done"), 1000));
// }

// function task2() {
//   return new Promise(resolve => setTimeout(() => resolve("Task 2 Done"), 2000));
// }

// function task3() {
//   return new Promise(resolve => setTimeout(() => resolve("Task 3 Done"), 1500));
// }

// async function runTasks() {
//   try {
//     let results = await Promise.all([
//       task1(),
//       task2(),
//       task3()
//     ]);
//     console.log(results);
//   } catch (error) {
//     console.log(error);
//   }
// }

// runTasks();
//////////////////////
// getUser() → resolves "User Loaded" after 1 sec
// getOrders() → resolves "Orders Loaded" after 2 sec
// getNotifications() → resolves "Notifications Loaded" after 1.5 sec
// Use Promise.alyal + async/await to print all results.

function getUser(){
    return new Promise(resolve =>setTimeout(()=>resolve("User Loaded"),1000));
}
function getOrder(){
        return new Promise(resolve =>setTimeout(()=>resolve("Order Loaded"),1500));
}
function getNotification(){
    return new Promise(resolve=>setTimeout(()=>resolve("Notifiction Loaded"),2000));
}

async function task(){
    try{
        let product=await Promise.all([
            getUser(),
            getOrder(),
            getNotification()
        ]);
        console.log(product);
    }catch(error){
        console.log(error);
    }
}

task();