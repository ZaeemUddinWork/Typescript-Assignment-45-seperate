/*

Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/


let alien_colors : string[]= ['Green','White','Red','Blue','Yellow'];


for (let i = 0; i < alien_colors.length; i++)
{
    if (alien_colors[i] == 'Green')
    { 
    
        console.log(`${alien_colors[i]} color alien Earn 5 points`);

    }
    else if (alien_colors[i] == 'Yellow')
    { 
    
        console.log(`${alien_colors[i]} color alien Earn 10 points`);

    }
    else if (alien_colors[i] == 'Red')
    { 
    
        console.log(`${alien_colors[i]} color alien Earn 15 points`);

    }
    else {
        console.log(`${alien_colors[i]} color alien Earn 0 points`);
    }

}