/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. 
Call your function for three different cities, at least one of which is not in the default country.
*/

//data of cities and countries
let city_1 = 
{
    city: 'Karachi',
    Country: 'Pakistan'
}

let city_2 = 
{
    city: 'Tokyo',
    Country:'Japan'
}
let city_3 = 
{
    city: 'New York',
    Country:'America'
}
let city_4 = 
{
    city: 'London',
    Country:'United Kingdom'
}
let city_5 = 
{
    city: 'Toyama',
    Country:'Japan'
}

//array
let cities : Array<typeof city_1> = [];
// pushing data into array
cities.push(city_1);
cities.push(city_2);
cities.push(city_3);
cities.push(city_4);
cities.push(city_5);

//creating function for describe city
function describe_city(cities : Array<typeof city_1>)
{
    for(let i of cities)
    {
        console.log(`${i.city} is city of ${i.Country}.`);
    }
}

//calling function
describe_city(cities);