const food = ["apple", "carrot", "pear", "banana", "pineapple", "avocado"];

/** Method 01 - forEach
 * params - call back function
 * mainly to execute the same code on all the elements in an array
 * 
 * output --> 
apple
carrot
pear
banana
pineapple
avocado
 */
const forEachFood = food.forEach((item) => {
  console.log(item);
});

/**
 * Method 02 - map
 *
 * returns an array
 */
const mapFood = food.map((item, key) => {
  return item + " " + key;
});

console.log(mapFood);
