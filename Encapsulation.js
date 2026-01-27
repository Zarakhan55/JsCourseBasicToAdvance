//  what is Encapsulation?
//  Encapsulation is the process of hiding data and controlling access using methods.

class User {
  #password;

  setPassword(pass) {
    this.#password = pass;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }
}

let u = new User();
u.setPassword("1234");

console.log(u.checkPassword("1234")); // true
