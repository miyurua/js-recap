const food = ["apple", "carrot", "pear", "banana", "pineapple", "avocado"];
const people = ["john", "jack", "ava", "bella", "zane"];

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

/**
 * Method 03 - sort
 *
 * returns an array that's sorted
 */

const sortFood = food.sort();

console.log(sortFood);

/**
 * Method 04 - Filter
 *
 * returns an array that meets the condition
 */
const filterFood = food.filter((item) => item === "apple");
console.log(filterFood);

/**
 * Method 05 - Concat
 *
 * concatenates 2 arrays
 */
const concatFoodPeople = food.concat(people);

console.log(concatFoodPeople);
