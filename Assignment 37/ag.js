/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/
//data for array
var blue_shirt = {
    color: 'Blue',
    Size: 'Large',
    message: '!! T love TypeScript !!'
};
var red_shirt = {
    color: 'Red',
    Size: 'Medium',
    message: "!! T love TypeScript !!"
};
var green_shirt = {
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
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
// putting data into array
var shirt = [];
shirt.push(blue_shirt);
shirt.push(red_shirt);
shirt.push(green_shirt);
shirt.push(yellow_shirt);
shirt.push(white_shirt);
console.log("Special Order List:");
// function for print order list
function make_shirt(shirt) {
    for (var _i = 0, shirt_1 = shirt; _i < shirt_1.length; _i++) {
        var i = shirt_1[_i];
        console.log(" \n            Shirt color: ".concat(i.color, "\n            Shirt Size: ").concat(i.Size, "\n            Message to be Printing on shirt: \"").concat(i.message, "\"\n            x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n\n        "));
    }
}
// calling function
make_shirt(shirt);
