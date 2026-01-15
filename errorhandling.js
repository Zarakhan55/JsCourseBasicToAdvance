//  Error handling means catching runtime errors so your app doesn’t crash.

try{
    let result=10;
    console.log(result);
}catch(error){
    console.log("Error",error.message);
}
/////////////////////////////////
// 
async function process() {
  try {
    console.log("Trying...");
    throw new Error("Failed");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Cleanup done");
  }}

process();
///////////////////////////
// Custom Errors\
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18+");
  }
  return "Access Granted";
}

try {
  console.log(checkAge(15));
} catch (error) {
  console.log(error.message);
}

//////////////////
// reject
// Used inside Promise,Rejects the promise manually
// throw
// Used in normal code or async/await,Immediately stops execution,Sends error to catch

async function load() {
  try{

console.log("typing......")
  throw new Error("Failed");
}catch(error){
      console.log("Error:", error.message);

}}
load();

🎯 Interview One-Line Answer

In async/await, errors should be handled using try/catch; otherwise, they become unhandled promise rejections.