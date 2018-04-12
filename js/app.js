let firstName = prompt ('What is your first name?');

console.log(firstName);

let myFirstName = (firstName);

let lastName = prompt ('Hi '+ myFirstName +'. What is your last name?');

console.log(lastName);

let birthday = prompt ('What is your birthday? Please enter in YYYYMMDD format.');

console.log(birthday);

let dob = (birthday);
let year = Number(dob.substr(0, 4));
let month = Number(dob.substr(4, 2)) - 1;
let day = Number(dob.substr(6, 2));
let today = new Date();
let age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
alert(age + '! Wow, you are over the hill buddy.');




