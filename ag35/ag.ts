/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
*/

//array of name of animals
let animal: string[] = ['Chimpanzees','Gorillas','Orangutans'];
// places where we can found this animals
let places: string[] = ['Burundi','Uganda','Sumatra'];

//loop for printing these all animals
for (let i =0; i< animal.length; i++)
{
 console.log(`${animal[i]} found on ${places[i]}`);
}
//last statement
console.log(`These all animal and their extinct ancestors form a family of organisms known as the Hominidae.`);


console.log(`\n\n\n Another methode \n\n\n`);

// by doing with another methoes
//2nd methode
// all animals name with their places
let Chimpanzees = 
{
    animal: 'Chimpanzees',
    places: 'Burundi'
}
let Gorillas = 
{
    animal: 'Gorillas',
    places: 'Uganda'
}
let Orangutans = 
{
    animal: 'Orangutans',
    places: 'Sumatra'
}
// now puting all these into array
 let animals: Array<typeof Chimpanzees> = [];
 animals.push(Chimpanzees);
 animals.push(Gorillas);
 animals.push(Orangutans);

 //making a function for anima lopp for printing
function Animal_loop(animals: Array<typeof Chimpanzees>)
{
    for(let i of animals)
    {
        console.log(`Animal Name: ${i.animal} is found on ${i.places} place.`)
    }
}
Animal_loop(animals);
//last statement
console.log(`These all animal and their extinct ancestors form a family of organisms known as the Hominidae.`);
