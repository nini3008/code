//  A prototype is a property on any function created in javascript that points to an object
//  the new keyord creates the 'Object.create and 'return' process when creating a prototype

// //inheritiance- adviced not to use this pattern

// class HumanCharacteristics {
//   constructor(name, energy) {
//     this.name = name;
//     this.energy = energy;
//   }
//   eat(amount) {
//     console.log(`${this.name} has eaten`);
//     this.energy += amount;
//   }

//   sleep(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
//   }

//   shower(length) {
//     console.log(`${this.name} just showered`);
//     this.energy += length;
//   }
// }

// class Man extends HumanCharacteristics {
//   constructor(name, energy) {
//     super(name, energy);
//   }
//   beerTime() {
//     console.log(`${this.name} is about to drink beer`);
//   }
// }

// class Woman extends HumanCharacteristics {
//   constructor(name, energy) {
//     super(name, energy);
//   }
//   shaveLegs() {
//     console.log(`${this.name} is about to shave legs`);
//   }
// }

// //compostion- preferred pattern

// const food = state => ({
//   eat: () => console.log(`${state.name} has eaten`)
// });

// const sleep = state => ({
//   sleeping: () => console.log(`${state.name} is sleeping`)
// });

// const shaveLegs = state => ({
//   shaving: () => console.log(`${state.name} is shaving`)
// });

// const drinkBeer = state => ({
//   drinking: () => console.log(`${state.name} is drinking`)
// });

// const woman = name => {
//   let state = {
//     name
//   };
//   return Object.assign({}, food(state), sleep(state), shaveLegs(state));
// };

// const man = name => {
//   let state = {
//     name
//   };
//   return Object.assign({}, food(state), sleep(state), drinkBeer(state));
// };

// woman("andrea").eat();

// man("nick").drinking();

// function Profile(gender) {
//   this.gender = gender;
// }

// Profile.prototype.name = function() {
//   console.log(`i am a ${this.gender}`);
// };

// Profile.prototype.sleep = function() {
//   console.log(`i dont sleep`);
// };

// const gend = new Profile("male");

// let friends = [];
// const friendswithout = new Array();

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};
Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};
Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

const leo = new Animal("Leo", 7);
const snoop = new Animal("Snoop", 10);

for (let key in snoop) {
  console.log(`Key: ${key}. Value: ${snoop[key]}`);
}
for (let key in leo) {
  if (leo.hasOwnProperty(key)) {
    console.log(`Key: ${key}. Value: ${leo[key]}`);
  }
}
