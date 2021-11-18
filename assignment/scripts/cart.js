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
//creating function to check if basket is full
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}
//END creating function to check if basket is full
//Test to add items to basket array
console.log(addItem("pizza"));
console.log(addItem("bread"));
console.log(addItem(""));
console.log(addItem("milk"));
console.log(basket);
//end test to add items to basket array

//function to list items on their own line
function listItems() {
  for (i = 0; i < basket.length; i++) console.log(basket[i]);
}
listItems();
//End function to list items on their own line
//Sets basket back to an empty array
function empty() {
  return (basket = []);
}

empty();
//End sets basket back to an empty array

//Testing if basket empties and can be refilled
console.log(basket);
console.log(addItem("pizza"));
console.log(addItem("bread"));
console.log(addItem(""));
console.log(addItem("milk"));
console.log(addItem("peas"));
console.log(basket);
listItems();
//END Testing if basket empties and can be refilled
//Using test code from assignment
console.log(`Basket is ${basket}`);
console.log("Adding apples (expect true)", addItem("apples"));
console.log(`Basket is now ${basket}`);
//END test code from assignment
//test if function isFull works
console.log(isFull());
//Checking if basket being full returns false and dose not add
console.log(`Basket is ${basket}`);
console.log("Adding oranges (expect false)", addItem("oranges"));
console.log(`Basket is now ${basket}`);
//END Checking if basket being full returns false and dose not add
