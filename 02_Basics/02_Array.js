const marvel_heros = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dc_heros= ["Superman", "Batman", "Wonder"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[5][1]);

// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]; //Spread operator
// console.log(all_new_heros);

// Another Array Methods

const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5,6]]];

const real_another_arr=another_arr.flat(Infinity); //flat method
// console.log(real_another_arr);

console.log(Array.isArray("Ashwin")); 
console.log(Array.from("Ashwin")); 
console.log(Array.from({name: "Ashwin"})); //Interesting use of Array.from() method

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); //Array.of() method