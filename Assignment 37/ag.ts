/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/



//data for array
let blue_shirt = 
{
    color: 'Blue',
    Size: 'Large',
    message: '!! T love TypeScript !!'
}
let red_shirt = 
{
    color: 'Red',
    Size: 'Medium',
    message: "!! T love TypeScript !!"
}
let green_shirt = 
{
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
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
shirt.push(red_shirt);
shirt.push(green_shirt);
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