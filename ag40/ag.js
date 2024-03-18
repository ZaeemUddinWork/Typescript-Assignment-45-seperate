/*
Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.

*/
function make_album(name, Album_titel, tracks) {
    var albums = {
        name: name,
        Album_titel: Album_titel,
        tracks: tracks,
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
var artist_1 = make_album('Saieen Zahoor', 'Toomba', 10);
var artist_2 = make_album('Raheem Shah', 'Ghum');
var artsit_3 = make_album('Qayaas', 'Heal', 22);
var artist_4 = make_album('Sajjad Ali', 'Goldies Not Oldies', 12);
var artist_5 = make_album('Pathanay Khan', 'Mera Ishq Vi Toon');
console.log(artist_1);
console.log(artist_2);
console.log(artsit_3);
console.log(artist_4);
console.log(artist_5);
