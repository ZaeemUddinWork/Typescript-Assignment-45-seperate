/*

Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

//Original Array

let Magicians: string[]= ['Abbot, David','Carney, John','Burlingame, H. J','Dietrich, Dorothy'];

//OThe array that will change

let Magicians2: string[]= ['Abbot, David','Carney, John','Burlingame, H. J','Dietrich, Dorothy'];

//function to show magicians

function show_magicians(Names)
{

    for (let i of Magicians)
    {
        console.log
        (`${i}.`);
    }
}

// function for adding great in names


function make_great(Names)
{
    for(let i =0; i < Magicians.length; i ++)
    {
        Magicians[i] = 'The Great ' + Magicians[i];
    }
}



console.log(`\n \nList one of the best magicians without Great!! \n`)

// to show names with out great
show_magicians(Magicians);
// calling the function of adding great

make_great(Magicians2);

console.log(`\n \nList one of the best magicians with Great!! \n`)

// to show names with  great

show_magicians(Magicians2);

