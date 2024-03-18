/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it.
Call the function.


*/
var blue_shirt = {
    color: 'Blue',
    Size: 'Large',
    message: '!! Break The Rules !!'
};
var green_shirt = {
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
};
var red_shirt = {
    color: 'Red',
    Size: 'Medium',
    message: "!! I don't trust in love !!"
};
var yellow_shirt = {
    color: 'Yellow',
    Size: 'Extra Large',
    message: '!! Be the King not slave !!'
};
var white_shirt = {
    color: 'White',
    Size: 'Extra Small',
    message: '!! give respect and take respect !!'
};
var shirt = [];
shirt.push(blue_shirt);
shirt.push(green_shirt);
shirt.push(red_shirt);
shirt.push(yellow_shirt);
shirt.push(white_shirt);
function make_shirt(shirt) {
    for (var _i = 0, shirt_1 = shirt; _i < shirt_1.length; _i++) {
        var i = shirt_1[_i];
        console.log(" \n            Shirt color: ".concat(i.color, "\n            Shirt Size: ").concat(i.Size, "\n            Message to be Printing on shirt: \"").concat(i.message, "\"\n            x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n\n        "));
    }
}
make_shirt(shirt);
