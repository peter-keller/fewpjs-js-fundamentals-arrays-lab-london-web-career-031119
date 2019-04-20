// Write your solution here!
const pets = ["Milo", "Otis", "Garfield"];

const append = [...pets, "Odie"];
let prepend = ["Odie", ...pets];
let removeLast = pets.slice(0, -1);
let removeFirst = pets.slice(1, pets.length);
