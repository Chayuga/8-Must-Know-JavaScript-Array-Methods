// 8 Must Know JavaScript Array Methods : https://youtu.be/R8rmfD9Y5-c

//=============================== End Array Map ===============================//

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//============================= Array Filter =================================//
// will filter the Array, and return items that are equal to or less than 100
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);

//============================ End Array Filter ==============================//
//=============================== Array Map ===================================//
// Will loop over the Array and return all the names or price
const itemNames = items.map((item) => {
  return item.price;
  return item.name;
});

console.log(itemNames);

//============================= End Array Map =================================//
//=============================== Array Find ==================================//
// Will search in the Array for the specific name or price and return the name if found
const foundItem = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);

//============================= End Array Find =================================//
//=============================== Array forEach ==============================//
// Will loop over the array, and return individual item from the Array
items.forEach((item) => {
  console.log(item.price);
  console.log(item.name);
});

//============================= End Array forEach ==============================//
//================================== Array some ================================//
// Checks whether the array has a price that is expensive than 100
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

//================================ End Array some ==============================//
//=================================== Array every ==============================//
// Will check every item, and return true or false if all items are less than 100
const checkEverything = items.every((item) => {
  return item.price <= 100;
});
console.log(checkEverything);

//================================ End Array every ==============================//
//================================== Array reduce ==============================//
// Will loop over the array, adds all the price.
// it takes in the total of the previous items as parameters and the current item as another parameter.
// Then rturns the item price plus the total of the previous prices.

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

console.log(total);
//================================ End Array reduce ==============================//
//=================================== Array reduce ===============================//
// Loops over the Array, and checks if the specified number is in the List
const numbers = [1, 2, 3, 4, 5, 6];

const includesFour = numbers.includes(3);
console.log(includesFour);

//=============================== End Array reduce ==============================//
