const name = "Ashwin"
const repoCount=50

// console.log(name +" "+ repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Ashwin-Yadav')
// console.log(gameName.substring(0,4));

// console.log(gameName[0]);
// console.log(gameName.__proto);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('w'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="       Ashwin     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url= "https://ashwin.com/ashwin%20yadav"

console.log(url.replace('%20','-'));

console.log(url.includes('ashwin'));
console.log(url.includes('ashwiny'));

console.log(gameName.split('-'))

