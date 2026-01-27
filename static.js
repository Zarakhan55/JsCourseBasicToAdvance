// what is static?
// Belongs to class, not object
// Called using ClassName
// Object cannot call it

class math{
static add(A,B){
    return A + B;
}
}
let m = math.add(5,10);
console.log(m);




class User{
    static greet(){
        console.log("Welcome User!");
    }
}

let u=User.greet();
console.log(u);