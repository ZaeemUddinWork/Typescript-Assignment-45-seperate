/* 
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

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




