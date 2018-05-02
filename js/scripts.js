// function sqrtUserNum() {
//     let userNum;
  
//     for (;;) {
//       userNum = parseFloat(prompt("Give me a number and I'll tell you it's square-root."));
//       if (!isNaN(userNum))
//         break;
//       alert("The number was not valid!");
//     }
  
//     alert(Math.sqrt(userNum));
//   }
  
//   sqrtUserNum()



// // In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
// // Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.

// let usersString = prompt("In one sentence tell me your favorite thing about Geekwise.", "I love the instructors.")
// let usersArray = usersString.split(" ");

// function capitalizeFirstLetter(usersArray) {
//     return usersString.charAt(0).toUpperCase() + usersString.slice(1);
// }
// let capitalLetter = capitalizeFirstLetter();
// console.log(capitalLetter);


// function queryDom() {
//    let tagName = document.('blue');
//    console.log(tagName);
// }

// queryDom();



// let button = document.querySelector('.btn-danger');
// let div = document.querySelector('.red');

// button.addEventListener('click', 
// (e) => {
//     alert(`You clicked on the ${e.target}`);
// })

// div.addEventListener('mouseenter',
// (e) => {
//     div.className='yellow';
// })

const fahrenheit = document.getElementById('fahrenheit');
const celsius = document.getElementById('celsius');

fahrenheit.addEventListener('keyup', e => celsius.value = ( fahrenheit.value-32 ) * 5/9);

celsius.addEventListener('keyup', e => fahrenheit.value = ( celsius.value *9/5 ) + 32);













