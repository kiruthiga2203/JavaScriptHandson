let country = "India";
let continent = "Asia";
let population = '2 Million';
let year = Date;

console.log(country);
console.log(continent);
console.log(population);

let checkTheDatatype = true;
console.log(checkTheDatatype);
console.log(typeof checkTheDatatype);

let isIland = false;
console.log(isIland);

let checkUndefinedAndNull;

console.log(typeof isIland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof year);
console.log(typeof checkUndefinedAndNull);


//coding Challenge #1
let massOfMark = 78;
let heightOfMark = 1.69;
let massOfJohn = 92;
let heightOfJohn = 1.95;
let BMIOfMark = massOfMark / heightOfMark ** 2;
let BMIOfJohn = massOfJohn / heightOfJohn ** 2
console.log(BMIOfMark);
console.log(BMIOfJohn);
let markHigherBMI = (BMIOfMark > BMIOfJohn);
console.log(markHigherBMI);

// Coding Challenge #2
if (BMIOfMark > BMIOfJohn) {
    console.log(`Mark's BMI is ${BMIOfMark}`);
    console.log(`Mark's BMI is higher than John's!`);
} else {
    console.log(`Mark's BMI is ${BMIOfJohn}`);
    console.log(`John's BMI is higher than Mark's!`);

}

//COding Challenge 3

//Calculating avaerage Score
const scoreOfDolphins = (96 + 108 + 89) / 3;
const scoreOfKoalas = (88 + 91 + 110) / 3;
console.log(scoreOfDolphins, scoreOfKoalas);

//Either Dolphins wins or Koalas wins and also draw
//Dolphins has higher score
if (scoreOfDolphins > scoreOfKoalas) {
    console.log('Dolphins win the trophy 🎉');
    //Koalas has higher score
} else if (scoreOfKoalas > scoreOfDolphins) {
    console.log('Koalas win the trophy 🎉');
    //exactly same
} else if (scoreOfDolphins === scoreOfKoalas) {
    console.log('Both win the trophy!');
}

// BONUS 1
const scoreOfDolphin = (97 + 112 + 101) / 3;
const scoreOfKoala = (109 + 95 + 123) / 3;
console.log(scoreOfDolphin, scoreOfKoala);

//Score of Dolphins greater than Koalas and also greater than 100
if (scoreOfDolphin > scoreOfKoala && scoreOfDolphin >= 100) {
    console.log('Dolphins win the trophy 🎉');
}
//Score of Koalas greater than Koalas and also greater than 100
else if (scoreOfKoala > scoreOfDolphin && scoreOfKoala >= 100) {
    console.log('Koalas win the trophy 🎉');
}
// Both have same score -- Bonus 2
else if (scoreOfDolphin === scoreOfKoala && scoreOfDolphin >= 100 && scoreOfKoala >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy!');
}

//Bonus2
const scoreOfDolphin2 = (97 + 112 + 101) / 3;
const scoreOfKoala2 = (109 + 95 + 106) / 3;
console.log(scoreOfDolphin2, scoreOfKoala2);
if (scoreOfDolphin2 === scoreOfKoala2 && scoreOfDolphin2 >= 100 && scoreOfKoala2 >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy!');
}

//Coding Challenge 4

const billvalue = prompt("Enter the bill amount", "0");
const bill = parseFloat(billvalue);
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}`)







