/* Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

/* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */


let names: string[] = ['Zaeem Uddin','Kamran Tessori', 'Sir Zia Khan','Taha Najam'];

for (let i = 0; i <=3 ; i++ )
{
    let message: string = `\n Hi Mr. ${names[i]}, We are inviting you to our dinner party`;
    console.log(message);
}

console.log(`\n unfortunately ${names[0]} will'not come to dinner party.`)

names[0]= 'Elon musk';



for (let i = 0; i <= 3 ; i++)
{
    let message: string = `\n Hi Mr. ${names[i]}, We are inviting you to our dinner party`;
    console.log(message);
}

