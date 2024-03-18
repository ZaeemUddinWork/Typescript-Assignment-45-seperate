/*
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.


*/
var city1 = {
    city: 'Karachi',
    Country: 'Pakistan'
};
var city2 = {
    city: 'Tokyo',
    Country: 'Japan'
};
var city3 = {
    city: 'New York',
    Country: 'America'
};
var city4 = {
    city: 'London',
    Country: 'United Kingdom'
};
var city5 = {
    city: 'Toyama',
    Country: 'Japan'
};
//array
var city_countries = [];
// pushing data into array
city_countries.push(city1);
city_countries.push(city2);
city_countries.push(city3);
city_countries.push(city4);
city_countries.push(city5);
//creating function for describe city
function city_country(city_countries) {
    for (var _i = 0, city_countries_1 = city_countries; _i < city_countries_1.length; _i++) {
        var i = city_countries_1[_i];
        console.log("\"".concat(i.city, ", ").concat(i.Country, "\""));
    }
}
//calling function
city_country(city_countries);
