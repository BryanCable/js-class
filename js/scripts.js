/*for (let i = 0; i < 10; i++) {
    console.log (i);
}*/

/*for (let i = 0; i < 10 || i < 15; i++) {
    console.log(i);
}*/



/*for (let i=0; i<10 || i<15; i++) {
    if (
        !
        (i % 2 === 0)
    )
    console.log(i);
}*/




/*var favoriteBook = "Perks to Being a Wallflower";

var aBook = new String (favoriteBook);

var isEqual = (favoriteBook == aBook);
console.log(isEqual);
isEqual = (favoriteBook == aBook);
console.log(isEqual);*/


/*var yourName = prompt ('whats your name?');

console.log(yourName.length);*/

// two equals signs means loose equals and three means strict equals. == just type === type and value


let obj1 = {
    name: "Bryan"
};

let obj2 = {
    name: "Bryan"
};

console.log(obj1 === obj2);

// obj can never equal a never obj

// modulo % = the remainder of whatever your dividing by

// increment means the thing in increments of positive 1 decrement means thing in increments of negative 1
// increment is ++ decrement is --

// edgecasing

// NaN not a number


console.log(typeof ("three" * 15));

// console.log(isNaN("three" * 15));


let theirValue = prompt('Give me a number');

theirValue = parseInt(theirValue);

theirValue += 42;
alert(theirValue);

theirValue -= 42;
alert(theirValue);

theirValue *= 42;
alert(theirValue);

theirValue /= 42;
alert(theirValue);




/*let string = prompt("Tell me your favorite numberl");

string.toString();

alert(`Your favorite number is ${string}`);*/