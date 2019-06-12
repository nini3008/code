const data = [
  {
    city: "Boston",
    value: "#f00"
  },
  {
    city: "Boston",
    value: "#0f0"
  },
  {
    city: "Madrid",
    value: "#00f"
  },
  {
    city: "Lagos",
    value: "#0ff"
  },
  {
    city: "NewYork",
    value: "#f0f"
  },
  {
    city: "NewYork",
    value: "#ff0"
  },
  {
    city: "Texas",
    value: "#000"
  },
  {
    city: "Texas",
    value: "#000"
  },
  {
    city: "london",
    value: "#000"
  },
  {
    city: "london",
    value: "#000"
  }
];
const menu = document.getElementById("menu");

const cities = data
  .map(function(city) {
    return city.city;
  })
  .reduce(function(allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

console.log(cities);
for (let [key, value] of Object.entries(cities)) {
  console.log(`${key}: ${value}`);
  menu.innerHTML = `<li>${key} ${value}</li>`;
}
// menu.innerHTML = `<li>${key} ${value}</li>`;
