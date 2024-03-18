/*
City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.


*/


let city1 = 
{
    city: 'Karachi',
    Country: 'Pakistan'
}

let city2 = 
{
    city: 'Tokyo',
    Country:'Japan'
}
let city3 = 
{
    city: 'New York',
    Country:'America'
}
let city4 = 
{
    city: 'London',
    Country:'United Kingdom'
}
let city5 = 
{
    city: 'Toyama',
    Country:'Japan'
}

//array
let city_countries : Array<typeof city1> = [];
// pushing data into array
city_countries.push(city1);
city_countries.push(city2);
city_countries.push(city3);
city_countries.push(city4);
city_countries.push(city5);

//creating function for describe city
function city_country(city_countries : Array<typeof city1>)
{
    for(let i of city_countries)
    {
        console.log(`"${i.city}, ${i.Country}"`);
    }
}

//calling function
city_country(city_countries);