/* Guest List: If you could invite anyone, living or deceased,
 to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
 Then use your list to print a message to each person, inviting them to dinner. */

let names: string[] = ['Zaeem Uddin','Kamran Tessori', 'Sir Zia Khan','Taha Najam'];

for (let i = 0; i <=3 ; i++ )
{
    let message: string = `Hi Mr. ${names[i]}, We are inviting you to our dinner party`;
    console.log(message);
}