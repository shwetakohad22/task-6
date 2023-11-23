class Person {
  constructor(firstName, lastName, age, email, contactNo) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.contactNo = contactNo;
  }
  displayInfo() {
    console.log(
      `name: ${this.name}, age: ${this.age}, email: ${this.email}, contact number: ${this.contactNo}`
    );
  }
}
let Person1 = new Person(
  "Shweta",
  "Kohad",
  22,
  "shweta22@gmail.com",
  8888888888
);
let Person2 = new Person(
  "vishal",
  "Lende",
  22,
  "visha24@gmail.com",
  9999999999
);
console.log(Person1);
console.log(Person2);
