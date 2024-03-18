/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.
*/


let Magicians: string[]= ['Abbot, David','Carney, John','Burlingame, H. J','Dietrich, Dorothy'];

function show_magicians(Magicians)
{

    console.log(`List one of the best magicians !!`)
    for (let i of Magicians)
    {
        console.log
        (`${i}.`);
    }
}
// to show names with out great
show_magicians(Magicians);

// function for adding great in names


function make_great(Magicians)
{
    for(let i =0; i < Magicians.length; i ++)
    {
        Magicians[i] = 'The Great ' + Magicians[i];
    }
}

// calling the function of adding great

make_great(Magicians);

// to show names with  great

show_magicians(Magicians);