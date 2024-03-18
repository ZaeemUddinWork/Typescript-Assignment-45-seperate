/* Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner. */
var names = ['Zaeem Uddin', 'Kamran Tessori', 'Sir Zia Khan', 'Taha Najam'];
for (var i = 0; i <= 3; i++) {
    var message = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party");
    console.log(message);
}
