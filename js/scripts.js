// let age = parseInt(prompt("How old is your dog?"));

// if(!isNaN(age)){
//     // call the function
// } else {
//     let secondTry = parseInt(prompt("dude, I said an age.."));
// }
// let human = 7;

// function dogsAge () {
//     return age * human;
// };

// alert(dogsAge());

// function lastChance() {
//     let newValue = parseInt(prompt("hey man, give me an age already."));
//     if(!isNaN(newValue)) {
//         alert(newValue)
//     } else {
//         lastChance();
//     }
// }


let age = parseInt(prompt("How old are you?"));

function yearsLeft (age) {
    return 80 - age
}

let ageLeft = yearsLeft(age);

function daysLeft (yearsLeft) {
    return yearsLeft * 365
}

let daysLifeLeft = daysLeft(ageLeft);

let productUse = parseInt(prompt("How many sparkling waters do you drink a day?"))

function lifeSupply (daysLifeLeft, productUse) {
    return daysLifeLeft * productUse
}

let lifetimeSupply = lifeSupply(productUse);

alert(lifetimeSupply);




