console
.log( // This is where the function is called
    "hello world" //This is the argument/parameter
); //Method which is a type of function
//In your browser's console, the RETURN is what gets printed;


function sayHello(name, greeting) {
    return `Hello ${name}, ${greeting}!`;
}

let myGreeting = sayHello("Connie", "You're the greatest!");

alert(myGreeting);
