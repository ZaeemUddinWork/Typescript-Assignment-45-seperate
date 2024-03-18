/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
//• Tests for equality and inequality with strings
var str1 = 'Hi this is Zaeem!';
var str2 = 'hi this is zaeem!';
console.log('Comparing str1 to str2 :');
console.log(str1 == str2); // false
console.log(str1 !== str2); // True
//• Tests using the lower case function
console.log('Comparing str1 to str2 by converting str1 into Lowwer Case :');
console.log(str1.toLocaleLowerCase() !== str2); // false
console.log(str1.toLocaleLowerCase() === str2); // True
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var class_1 = 20;
var class_2 = 30;
var class_3 = 15;
var class_4 = 25;
var class_5 = 40;
var class_6 = 20;
console.log('Comparing number of students in class 1 and class 2 :');
console.log(class_1 == class_2); // false
console.log('Comparing number of students in class 1 and class 6 :');
console.log(class_1 == class_6); // True
console.log('Comparing number of students in class 4 greter than 20 or not:');
console.log(class_4 > 20); // True
console.log('Comparing number of students in class 4  less than 20 or not:');
console.log(class_4 < 20); // false
console.log('Is class greater or equal to 40 or not:');
console.log(class_5 >= 40); // True
console.log('Is class less or equal to 30 or not:');
console.log(class_5 <= 40); // false
//including Tests using "and" and "or" operators
console.log('Comparing number of students in class 3 and class 5 greter than 20 or not : ');
console.log(class_3 > 20 && class_5 > 20); // false
console.log('Comparing number of students in class 1 or class 3 greter than 20 or not : ');
console.log(class_3 > 20 || class_5 > 20); // True
//• Test whether an item is in a array
var cars = ['Toyota', 'Subaru', 'BMW', 'Honda', 'Tesla'];
console.log('Is car array has brand Toyota or not :');
console.log(cars.includes('Toyota')); //True
console.log('Is car array has brand Lamborghini or not :');
console.log(cars.includes('Lamborghini')); //false
//• Test whether an item is not in a array
console.log(!cars.includes('Toyota')); //false
console.log(!cars.includes('Lamborghini')); //True
