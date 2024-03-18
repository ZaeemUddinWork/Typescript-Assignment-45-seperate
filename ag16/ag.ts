/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */




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

    //detele to more name now inventry is empty
    delete add_new_name[5];
    delete add_new_name[6];

    // checking the empty list
    for (let i = 0; i <= 6 ; i++)
    {
          console.log(add_new_name);
    }
