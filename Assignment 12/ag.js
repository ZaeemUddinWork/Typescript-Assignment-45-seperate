/* Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transportation = ['Tesla Model Y', 'Toyota Prius', 'Honda Accord', 'BMW 5 Series', 'BMW i5', 'Toyota Crown', 'Toyota Prius Prime'];
for (var i = 0; i <= 6; i++) {
    var message = "I would like to own a ".concat(transportation[i], ".");
    console.log(message);
}
