/*45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
        It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
        Print the Object that’s returned to make sure all the information was stored correctly.
*/


function manufacturer_car(manufacturer: string, model: string, ...other_properties: [string,any][]): any
{
    const cars : any = {
        manufacturer,
        model,
    };

    for (let [key,value] of other_properties)
    {
        cars[key] = value;
    }
    return cars;
}




let Bwm_e5 = manufacturer_car('BMW','E5',['Auto/Manual','Manual'],['Color','White'],['Wheels', 6]);
let Toyota_prius = manufacturer_car('Toyota','Prius',['Color','Green']);
let Tesla = manufacturer_car('Tesla','Pro Max',['Auto Drive (Yes or No)','Yes'],['Color','White']);
let Honda = manufacturer_car('Honda','Future Xli',['Color','Silver'],['Flying model (yes or no)', 'Yes'],['Tyres less (Yes or No)','Yes']);


console.log(`\nWelseme to Asawa Japan Showroom !!\n`);
console.log(`List of the cars that we have rigt now \n`);

console.log(Bwm_e5);
console.log(Toyota_prius);
console.log(Tesla);
console.log(Honda);