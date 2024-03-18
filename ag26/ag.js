/*
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
*/
var alien_colors = ['Green', 'Red', 'Yello', 'Blue', 'White'];
//loop for array 
for (var i = 0; i < alien_colors.length; i++) {
    if (alien_colors[i] == 'Green') {
        //it will print this if alien is green color
        console.log("The player just earned 5 points for shooting the  ".concat(alien_colors[i], " color alien."));
    }
    else {
        // it will print this if alien isn't green color
        console.log("The player just earned 10 points for shooting the  ".concat(alien_colors[i], " color alien."));
    }
}
