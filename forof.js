// let earning = [1000, 2500, 4000];
// for (let money of earning) {
//     console.log(money);
// }

// let earnings = [2000, 500, 3500, 1000];

//  for (let money of earnings) {
//     if(money > 1000){
//         console.log(money);
//     }
// }

let projects = [
    { name: "Landing Page", earning: 2000, status: "completed" },
    { name: "E-commerce", earning: 8000, status: "completed" },
    { name: "Portfolio", earning: 1500, status: "pending" },
    { name: "Restaurant Website", earning: 5000, status: "completed" },
    { name: "Blog Website", earning: 3000, status: "pending" }
];
for (let project of projects) {
    if(project.status === "completed") {
        console.log(`Project: ${project.name}, Earning: ${project.earning}`);
    }}
    