/* 
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

// current user list
let current_users : string[] = ['Ahmed','Taha','Mark','Ali','Elon'];

// new user list
let new_users : string[] = ['Raza','TAHA','Khan','Elon','Rameez','Mark'];


// converting all users name into lower case
let current_user_l = current_users.map(element => {
    return element.toLowerCase();
})
let new_users_l = new_users.map(element => {
    return element.toLowerCase();
})

// loop for checking current users name with new user names

    for (let i = 0 ; i < new_users_l.length; i++ )
    {
        switch(new_users_l[i])
        {
            
            case current_user_l[0]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[1]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[2]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[3]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[4]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[5]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            case current_user_l[6]:
                console.log(`The user name ${new_users_l[i]} has already taken !!`);
                break;
            default:
                //if name is not taken by any other person it will print this
            console.log(`The user name ${new_users_l[i]} is  available!!`);
                break;
        }
    }
    

