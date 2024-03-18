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





let names: string[] = ['Zaeem Uddin','Kamran Tessori', 'Sir Zia Khan','Taha Najam'];

//loop for printing message

for (let i = 0; i <=3 ; i++ )
{
    let message: string = `Hi Mr. ${names[i]}, We are inviting you to our dinner party /n`;
    console.log(message);
}

console.log(`\n unfortunately ${names[0]} will'not come to dinner party.`)


names[0]= 'Elon musk';
//loop for printing message


for (let i = 0; i <= 3 ; i++)
{
    let message: string = `Hi Mr. ${names[i]}, We are inviting you to our dinner party \n`;
    console.log(message);
}


console.log(`!! Fortunately I found a Big table for dinner party so we can invite more guest to our dinner party !! \n`);
// for beginning
names.unshift('mark zuckerberg');



// founction for Middle array

let additem = (arry,index,add_new_name) =>[
    // part of array before index specify
    ...arry.slice(0, index),

    add_new_name,
    // part of array after index specify

    ...arry.slice(index)
]

let add_new_name = additem(names,2,'Imran Uddin');

// for end of Array
add_new_name.push('Ali Imran');

//loop for printing message
for (let i = 0; i <= 6 ; i++)
{
    let message: string = `Hi Mr. ${add_new_name[i]}, We are inviting you to our dinner party \n`;
    console.log(message);
}



console.log('Unfortunately my new dinner table won’t arrive in time for the dinner, and I have space for only two guests. \n');


for (let i = 0; i <= 4 ; i++)
{
    //deleting 4 person from name list
    let message: string = `Hi Mr. ${add_new_name[i]}, We are really sorry that you are not invited to party. \n`;
    console.log(message);
    delete add_new_name[i];

}



   //invitation to two person 
    console.log(`Hi Mr. ${add_new_name[5]}, We telling you that you still invited to our dinner party!! \n`);
    
    console.log(`Hi Mr. ${add_new_name[6]}, We telling you that you still invited to our dinner party!! \n`);

    

    
    let no_name = add_new_name.length;


    console.log(`${no_name} people will come to party`);


    





