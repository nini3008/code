$(document).ready(function() {
  let $ul = $(".ul_wrap");
  let $list = $ul.find("li");
  let content = `<li>
  <div class="title">Critical Error
    <button class="close-button">X</button>
  </div>
  <div class="message"><img src="http://www.routinebot.com/wp-content/uploads/2009/06/error.png"/>An error has occurred while trying to display an error message.</div>
  <button class="ok"> <span>OK</span></button>
</li>`;
  let tmp = "";

  let addLiAnchorNodes = function(nodeAmount) {
    for (var i = 0; i < nodeAmount; i++) {
      tmp += content;
    }
    $ul.append(tmp);
  };

  addLiAnchorNodes(20);

  $(document).on("click", function() {
    $ul.find("li").addClass("error");
  });

  $(".error").draggable();

  var error = '<li class="error">' + $ul.find("li").html() + "</li>",
    x = window.innerWidth / 3,
    y = window.innerHeight / 3;

  $("body").on("click", ".ok, .close-button", function() {
    $ul.append(error);
    $(".error")
      .last()
      .css({
        top: y + "px",
        left: x + "px"
      })
      .draggable();

    x += 8;
    y += 8;
  });
});

// // A prototype is a property on any function created in javascript that points to an object
// // the new keyord creates the 'Object.create and 'return' process when creating a prototype

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
