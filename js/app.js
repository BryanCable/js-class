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

console.log(age);

confirm('You are ' +age+ '?');

if (age>=18&&age<80) {
    confirm('Do you like Star Wars?'); 
alert('Have you seen Spaceballs? It\'s much better than Star Wars.');
}
if (age>=80) {
    confirm('Do you like prunes? My instructor doesn\'t like old people apparently.');
}
if (age<18) {
    alert('You are too young to see the secrets within.');
}
