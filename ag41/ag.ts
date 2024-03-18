/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

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
show_magicians(Magicians);