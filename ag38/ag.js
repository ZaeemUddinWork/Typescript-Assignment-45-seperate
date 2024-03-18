/*
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.
*/
//data of cities and countries
var city_1 = {
    city: 'Karachi',
    Country: 'Pakistan'
};
var city_2 = {
    city: 'Tokyo',
    Country: 'Japan'
};
var city_3 = {
    city: 'New York',
    Country: 'America'
};
var city_4 = {
    city: 'London',
    Country: 'United Kingdom'
};
var city_5 = {
    city: 'Toyama',
    Country: 'Japan'
};
//array
var cities = [];
// pushing data into array
cities.push(city_1);
cities.push(city_2);
cities.push(city_3);
cities.push(city_4);
cities.push(city_5);
//creating function for describe city
function describe_city(cities) {
    for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
        var i = cities_1[_i];
        console.log("".concat(i.city, " is city of ").concat(i.Country, "."));
    }
}
//calling function
describe_city(cities);
