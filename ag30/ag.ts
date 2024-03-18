/*

Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/

// admin data
let Admin =
{
    user_name: 'Admin',
    password:   'Admin',

}
// marketing data
let Marketing =
{
    user_name: 'Marketing',
    password:   'Marketing123',

}
//accountant data
let Accountant =
{
    user_name: 'Accountant',
    password:   'Accountant123',

}

// other users data
let Mark =
{
    user_name: 'Mark',
    password:   'Mark123',

}

let Taha =
{
    user_name: 'Taha',
    password:   'Taha123',

}
let Kaito =
{
    user_name: 'Kaito',
    password:   'Kaito123',

}
// assigning data into array
let data : Array<typeof Admin> = [];

data.push(Admin);
data.push(Marketing);
data.push(Accountant);
data.push(Mark);
data.push(Taha);
data.push(Kaito);

// creating a function for condition checking for login user and passwords.
function login_function (data: Array<typeof Admin>)
{
    for (let i of data)
    {
        if (i.user_name == 'Admin' && i.password == 'Admin')
        {
            console.log(`Hello ${i.user_name}, Would like to see a Status reports ?`);
        }
        else  if (i.user_name == 'Marketing' && i.password == 'Marketing123')
        {
            console.log(`Hello ${i.user_name}, Would like to see a Marketing Status ?`);
        }
        else  if (i.user_name == 'Accountant' && i.password == 'Accountant123')
        {
            console.log(`Hello ${i.user_name}, Would like to see a Financial reports or Management Reports ?`);
        }
        else 
        {
            console.log(`Hello ${i.user_name}, Thanks For login again.`);
        }
    }
}
// calling function for working.
login_function(data);