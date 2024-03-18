/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
var Magicians = ['Abbot, David', 'Carney, John', 'Burlingame, H. J', 'Dietrich, Dorothy'];
function show_magicians(Magicians) {
    console.log("List one of the best magicians !!");
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var i = Magicians_1[_i];
        console.log("".concat(i, "."));
    }
}
show_magicians(Magicians);
function make_great(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = 'The Great ' + Magicians[i];
    }
}
make_great(Magicians);
show_magicians(Magicians);
