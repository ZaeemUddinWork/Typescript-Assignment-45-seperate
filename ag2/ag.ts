//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let name1:string = 'Zaeem uddin';

console.log(`\n\nName into Lower case  \n`);

console.log(name1.toLowerCase());

console.log(`\n\nName into Upper case \n`);


console.log(name1.toUpperCase());

let titel_name = name1[0].toUpperCase() + name1[1].toLowerCase() ;

let word = name1.split(' ');

console.log(`\n\nName into Titel case \n`);



console.log(word[0].slice(0.5,1.5).toUpperCase()+ word[0].slice(1).toLowerCase()+ " "+ word[1].slice(0.5,1.5).toUpperCase()+ word[1].slice(1).toLowerCase());