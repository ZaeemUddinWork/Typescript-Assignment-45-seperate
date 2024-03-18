/*
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ['Zaeem Uddin', 'Kamran Tessori', 'Sir Zia Khan', 'Taha Najam'];
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party /n");
    console.log(message);
}
console.log("\n unfortunately ".concat(names[0], " will'not come to dinner party."));
names[0] = 'Elon musk';
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party \n");
    console.log(message);
}
console.log("!! Fortunately I found a Big table for dinner party so we can invite more guest to our dinner party !! \n");
// for beginning
names.unshift('mark zuckerberg');
// founction for Middle array
var additem = function (arry, index, add_new_name) { return __spreadArray(__spreadArray(__spreadArray([], arry.slice(0, index), true), [
    add_new_name
], false), arry.slice(index), true); };
var add_new_name = additem(names, 2, 'Imran Uddin');
// for end of Array
add_new_name.push('Ali Imran');
//loop for printing message
for (var i = 0; i <= 6; i++) {
    var message = "Hi Mr. ".concat(add_new_name[i], ", We are inviting you to our dinner party \n");
    console.log(message);
}
