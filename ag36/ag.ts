/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. 
Call the function.


*/

//data for array
let blue_shirt = 
{
    color: 'Blue',
    Size: 'Large',
    message: '!! Break The Rules !!'
}
let green_shirt = 
{
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
}
let red_shirt = 
{
    color: 'Red',
    Size: 'Medium',
    message: "!! I don't trust in love !!"
}
let yellow_shirt = 
{
    color: 'Yellow',
    Size: 'Extra Large',
    message: '!! Be the King not slave !!'
}
let white_shirt = 
{
    color: 'White',
    Size: 'Extra Small',
    message: '!! give respect and take respect !!'
}

// putting data into array
let shirt : Array<typeof blue_shirt> = [];

shirt.push(blue_shirt);
shirt.push(green_shirt);
shirt.push(red_shirt);
shirt.push(yellow_shirt);
shirt.push(white_shirt);

console.log(`Special Order List:`)
// function for print order list
function make_shirt(shirt: Array<typeof blue_shirt>)
{
    for (let i of shirt)
    {
        console.log
        (` 
            Shirt color: ${i.color}
            Shirt Size: ${i.Size}
            Message to be Printing on shirt: "${i.message}"
            x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

        `)
    }
}

// calling function
make_shirt(shirt);