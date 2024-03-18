/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/
// list of mr favorite furits
var favorite_fruits = ['Orage', 'Banana', 'Apple', 'Mango'];
//loop for array condition checking
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == 'Apple') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Strawberry') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Banana') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'pineapple') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Mango') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Watermelon') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Orage') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else {
        console.log("......");
    }
}
