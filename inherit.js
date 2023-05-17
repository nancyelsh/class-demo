// Let's take this to the next level
// For more elaborate data structures, we use inheritance

// an instructor is a person
// parent class
class Person {
  constructor(first_name, last_name, interests) {
    this.name = `${first_name} ${last_name}`;
    this.interests = interests;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// child class
class Instructor extends Person {
  constructor(firstName, lastName, interests, age) {
    super(firstName, lastName, interests);
    this.age = age;
  }
}

const person = new Person('Nancy', 'El Sharkawi', ['Art', 'Yoga'], 28)
console.log(person.name, person.interests, person.age)

const instructor = new Instructor('Nancy', 'El Sharkawi', ['Art', 'Yoga'], 28)
console.log(instructor.age)

// We can override the Instructor's sayHello() method
class Instructor extends Person {
    // elements inside constructor can have default values
    constructor(first_name, last_name, interests, age, greeting) {
        super(first_name, last_name, interests);
        this.age = age;
        this.greeting
    }
    
    sayHello = () => console.log(
      `${this.greeting}, my name is ${this.name}, and I've been teaching ${this.age - 20} years and more!`
    );
}

const person = new Person("Michael", "Singer", [
  "Writing Books",
  "Building Billion-Dollar Businesses",
  "Meditation",
]);
person.sayHello();

const instructorNancy = new Instructor(
  "Nancy",
  "El Sharkawi",
  ["Meditation", "Drinking Coffee"],
  28,
  "Hey"
);
instructorNancy.sayHello();
