/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.

*/
function lets_make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('!!Sandwich ingredients Summary!!\n');
    if (items.length === 0) {
        console.log("!!!Please Add Items in your Sandwich!!!");
    }
    else {
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item, ". \n"));
        });
    }
}
lets_make_sandwich('Bread slice', 'Lettuce', 'Tomatoes', 'Onions', 'Peppers', 'Pickles', 'Olives', 'Bread slice');
