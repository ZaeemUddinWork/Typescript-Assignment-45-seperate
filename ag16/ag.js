/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
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
console.log('Unfortunately my new dinner table won’t arrive in time for the dinner, and I have space for only two guests. \n');
for (var i = 0; i <= 4; i++) {
    var message = "Hi Mr. ".concat(add_new_name[i], ", We are really sorry that you are not invited to party. \n");
    console.log(message);
    delete add_new_name[i];
}
console.log("Hi Mr. ".concat(add_new_name[5], ", We telling you that you still invited to our dinner party!! \n"));
console.log("Hi Mr. ".concat(add_new_name[6], ", We telling you that you still invited to our dinner party!! \n"));
delete add_new_name[5];
delete add_new_name[6];
for (var i = 0; i <= 6; i++) {
    console.log(add_new_name);
}
