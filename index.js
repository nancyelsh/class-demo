const instructor1 = {
  name: "Yousef",
  age: 32,
  character: "Firm",
  interests: ["Wearing swag shirts", "Issuing reports"],
};

const instructor2 = {
  name: "Nancy",
  age: 28,
  character: "Sensitive",
  interests: ["International Volunteering", "Art", "Running"],
};

const instructor3 = {
  name: "Ali",
  age: 24,
  character: "Caring",
  interests: ["Coding", "Being a good frien"],
};

// DRY
// Error Prone
// In reality, data is way more complex.
// Solution : Structure (Template)

// Class Syntax
class Instructor {
  // class Name: Singular and Upper case
  // Syntax Difference: class and object
  name = "Omar";
  age = 26;
  character = "fun to be around";
  topics = ["UI/UX", "Project Management", "Flutter"];

  // Add function later
  // this value depends on which object we're using
  introduceInstructor() {
    console.log(
      `A new instructor joined Coded. His name is ${this.name} and he is ${this.character}.`
    );
  }
}

const newInstructor = new Instructor(); // Created new instance of Instructor
console.log(newInstructor);

console.log(newInstructor.age); // . for possessiveness
newInstructor.topics.forEach((topic) => console.log(topic));
newInstructor.introduceInstructor();

class Meal {
  name = "Majboos";
  origin = "Kuwait";
  fans = 100;
  ingredients = ["Rice", "Chicken", "Hashow"];

  logIngredients() {
    console.log(this.ingredients);
  }

  cookMeal() {
    console.log(
      `To cook ${this.name}, you need to cook the ingredients separately then serve them together on a plate.`
    );
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  modifyIngredient(index, updatedIngredient) {
    this.ingredients[index] = updatedIngredient;
  }
}

const todaysMeal = new Meal();
console.log(todaysMeal);

todaysMeal.logIngredients();
todaysMeal.cookMeal();

todaysMeal.addIngredient("Kuwaiti Boharat");
todaysMeal.modifyIngredient(1, "Laham");
todaysMeal.logIngredients();
