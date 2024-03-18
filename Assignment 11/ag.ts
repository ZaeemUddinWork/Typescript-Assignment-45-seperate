/*Greetings: Start with the array you used in Exercise 11, 
but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same,
  but each message should be personalized with the person’s name.  */

let names: string[] = ['Taha','Zaeem','Ali','Najam'];


for (let i = 0; i <= 3; i++){

    let message: string = `\n Hi ${names[i]}, How are you ? \n I am inviting you to my birthday party!!`
    console.log(message);

}