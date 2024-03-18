/* They think of something you could store in a TypeScript Object.
   Write a program that creates Objects containing these items.
 */
var person_identity = {
    Name: 'Taha Khan',
    Age: 23,
    Dob: '2/24/2001',
    nationality: 'Pakistani',
};
var person_identity_2 = {
    Name: 'Ali Khan',
    Age: 13,
    Dob: '3/14/2011',
    nationality: 'American',
};
var person_identity_3 = {
    Name: 'Najam Uddin',
    Age: 38,
    Dob: '12/07/1988',
    nationality: 'Canadian',
};
var Identity = [];
Identity.push(person_identity);
Identity.push(person_identity_2);
Identity.push(person_identity_3);
console.log("Air Port Recent suspicious person Data");
function Print_data(Identity) {
    for (var _i = 0, Identity_1 = Identity; _i < Identity_1.length; _i++) {
        var i = Identity_1[_i];
        console.log("   \n        Name: ".concat(i.Name, "\n        Age: ").concat(i.Age, "\n        Date ofBirth: ").concat(i.Dob, "\n        Pationality : ").concat(i.nationality, "\n        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"));
    }
}
Print_data(Identity);
