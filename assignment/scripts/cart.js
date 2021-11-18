console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//creating basket with empty array and a function to add items to array
let basket = [];
const maxItems = 5;

function addItem(item) {
  if (item.length > 0 && isFull() === false) {
    basket.push(item);
    return true;
  } else return false;
}
//END creating basket with empty array and a function to add items to array

