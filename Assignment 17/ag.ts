/* 
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/


console.log('List of my favorite places in the world :');
//array of my favorite places
const places: string[] = ['Tokyo','Amazon','Antarctica','Atacama Desert','Banff National Park','Cappadocia','Etretat','Finnish Lapland'];
//printing place array  
console.log(`\nIn original order\n`);

console.log(places);

//printing place array  sorting in Alphabetical arranging 
console.log(`\nIn Alphabetical order\n`);


console.log([...places].sort())


//.sort((a,b) => a.localeCompare(b))
console.log(`\nIn Original order\n`);


console.log(places);

console.log(`\nIn Reverse Alphabetical order by useing sort()\n`);


console.log([...places].sort((a,b)=> b.localeCompare(a)));

console.log(`\nIn Original order\n`);


console.log(places);


console.log(`\nIn Reverse Alphabetical order by useing Reverse()\n`);


//printing place array  sorting in reverse Alphabetical arranging 

console.log([...places].sort().reverse());

console.log(`\nIn Original order\n`);


console.log(places);
