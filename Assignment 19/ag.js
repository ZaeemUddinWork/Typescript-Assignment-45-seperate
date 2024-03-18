/* Think of something you could store in a array.
For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything
 else you’d like. Write a program that creates a list
 containing these items. */
var Countries_name = ['Japan', 'Pakistan', 'Canada', 'America', 'India'];
// program for printing Country name list
console.log('Countries name list \n');
for (var _i = 0, Countries_name_1 = Countries_name; _i < Countries_name_1.length; _i++) {
    var country = Countries_name_1[_i];
    console.log(country);
}
