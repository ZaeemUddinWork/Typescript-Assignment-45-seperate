/* 
Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program. */



function person(name:string,age, nationality:string)
{
    return {
        name,
        age,
        nationality,
    }
}
let person_data = [
person('Taha',18,'Pakistani'),
person('Ali',13,'Canadian'),
person('Najam',40,'American'),
person('Waleed',20,'Pakistani'),
person('Ahmed',28,'Russian'),
person('Zaeem',22,'Japan')
]

// for index error printing 
console.log(`Printing index errpr of index 15: \n`+person_data[15]);


person_data.forEach((person_data) =>{
    console.log(`
    Person name: ${person_data.name}
    Age: ${person_data.age}
    Nationality: ${person_data.nationality}`);
})



