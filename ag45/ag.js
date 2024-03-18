/*45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
        It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
        Print the Object that’s returned to make sure all the information was stored correctly.
*/
function manufacturer_car(manufacturer, model) {
    var other_properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other_properties[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, other_properties_1 = other_properties; _a < other_properties_1.length; _a++) {
        var _b = other_properties_1[_a], key = _b[0], value = _b[1];
        cars[key] = value;
    }
    return cars;
}
var Bwm_e5 = manufacturer_car('BMW', 'E5', ['Auto/Manual', 'Manual'], ['Color', 'White'], ['Wheels', 6]);
var Toyota_prius = manufacturer_car('Toyota', 'Prius', ['Color', 'Green']);
var Tesla = manufacturer_car('Tesla', 'Pro Max', ['Auto Drive (Yes or No)', 'Yes'], ['Color', 'White']);
var Honda = manufacturer_car('Honda', 'Future Xli', ['Color', 'Silver'], ['Flying model (yes or no)', 'Yes'], ['Tyres less (Yes or No)', 'Yes']);
console.log("\nWelseme to Asawa Japan Showroom !!\n");
console.log("List of the cars that we have rigt now \n");
console.log(Bwm_e5);
console.log(Toyota_prius);
console.log(Tesla);
console.log(Honda);
