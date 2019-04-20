// Write your solution here!

const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.push("Odie");
prepend.unshift("Odie");
removeLast.pop();
removeFirst.shift();

/*
const pets = ["Milo", "Otis", "Garfield"];


const append = [...pets, "Odie"];
let prepend = ["Odie", ...pets];
let removeLast = pets.slice(0, -1);
let removeFirst = pets.slice(1, pets.length);
*/
