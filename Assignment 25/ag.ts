/* 
Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/

// array for alien color
let alien_color: string[] = ['Green', 'Red','Yellow'];

//lopp for if statement
for (let i = 0 ; i < alien_color.length; i++)
{
    // if condition for chaking alien color
    if(alien_color[i] === 'Green')
{
    // if alien color is green so it will print this
    console.log('Player Just earn 5% points');
}

else{
    // else for nothing

}}
