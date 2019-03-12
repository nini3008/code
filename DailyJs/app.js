//patterns for prototypes

function MaleSpecie(name, energy) {
  this.name = name;
  this.energy = energy;
}

MaleSpecie.prototype.eat = function(amount) {
  console.log(`${this.name} has eaten`);
  this.energy += amount;
};

MaleSpecie.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

MaleSpecie.prototype.shower = function(length) {
  console.log(`${this.name} just showered`);
  this.energy += length;
};

const lauren = new MaleSpecie("Lauren", 7);

// A prototype is a property on any function created in javascript that points to an object
// the new keyord creates the 'Object.create and 'return' process when creating a prototype
