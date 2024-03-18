/* They think of something you could store in a TypeScript Object. 
   Write a program that creates Objects containing these items.
 */




   let person_identity =
   {
    Name: 'Taha Khan',
    Age : 23,
    Dob: '2/24/2001',
    nationality: 'Pakistani',
   }
   let person_identity_2 =
   {
    Name: 'Ali Khan',
    Age : 13,
    Dob: '3/14/2011',
    nationality: 'American',
   }
   let person_identity_3 =
   {
    Name: 'Najam Uddin',
    Age : 38,
    Dob: '12/07/1988',
    nationality: 'Canadian',
   }
   

   let Identity: Array<typeof person_identity> = [];

Identity.push(person_identity);
Identity.push(person_identity_2);
Identity.push(person_identity_3);

console.log(`Air Port Recent suspicious person Data`)

function Print_data(Identity: Array<typeof person_identity>) 
{
    for(let i of Identity){
        console.log(`   
        Name: ${i.Name}
        Age: ${i.Age}
        Date ofBirth: ${i.Dob}
        Pationality : ${i.nationality}
        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-`
            )
    }
}


Print_data(Identity);