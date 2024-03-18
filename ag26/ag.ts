/* 
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
*/

let alien_colors : string[]= ['Green','Red','Yello','Blue','White'];

//loop for array 
for (let i = 0; i < alien_colors.length; i++)
{
    if (alien_colors[i] == 'Green')
    { 
        //it will print this if alien is green color
        console.log(`The player just earned 5 points for shooting the  ${alien_colors[i]} color alien.`);
    }
   
    else {
        // it will print this if alien isn't green color
        console.log(`The player just earned 10 points for shooting the  ${alien_colors[i]} color alien.`)
    }

}