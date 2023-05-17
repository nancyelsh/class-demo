// Has the issue been completely solved?
// You can use class Location
class Instructor {
  constructor(first_name, last_name, interests) {
    this.name = `${first_name} ${last_name}`;
    this.interests = interests;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// const inctructorNancy = new Instructor();
console.log(instructorNancy.name);
const instructorNancy = new Instructor("Nancy", "El Sharkawi", [
  "GraphQL",
  "NextJS",
  "ReactJS",
  "Express",
]);
console.log(instructorNancy.name, instructorNancy.interests);

const inctructorFatma = new Instructor("Fatma", "Almomen", []);

const inctructorHasan = new Instructor("Hasan", "Al Shemmari", [
  "GraphQL",
  "ReactJS",
  "Git",
]);
