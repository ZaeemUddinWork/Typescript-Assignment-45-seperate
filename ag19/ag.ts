/* Think of something you could store in a array.
For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything 
 else you’d like. Write a program that creates a list 
 containing these items. */


let Countries_name: string[] = ['Japan','Pakistan','Canada','America','India'];

 
// program for printing Country name list

  console.log( 'Countries name list \n');
  for (let country of Countries_name)
  {
    console.log(country);
  }
  