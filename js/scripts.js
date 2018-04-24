/*let shoppingList = [];

let item1 = "Detergent";
let item2 = "cheese";
let item3 = "crackers";
let item4 = "wine";

shoppingList.push(item1, item2, item3, item4);

console.log(shoppingList);*/


/*let favoriteMovie = ['Star Wars VI', '1983'];
let secondFavorite = ['Return of the King', '2003'];
let thirdFavorite = ['Equilibrium', '2002'];
let myFavoriteMovies = [];
myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);

console.log(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);*/



let favoriteMovie = ['The Matrix', 'Keanu Reeves'];
let secondFavorite = ['Point Break', 'Keanu Reeves'];
let thirdFavorite = ['Heat', 'Robert Deniro'];
let fourthFavorite = ['The Lion King', 'Jonathan Taylor Thomas'];
let fifthFavorite = ['American Psycho', 'Christian Bale']
let myFavoriteMovies = [];

const titles = [];
const favAndLeastFav = [];

myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);

// console.log(titles);


for(let i = 0; i < myFavoriteMovies.length; i++) {
    if(myFavoriteMovies[i][0] === 'The Matrix') {
        alert(myFavoriteMovies[i][0], myFavoriteMovies[i][1]);
    }
}

/*while (i < myFavoriteMovies.length) {
    console.log(i);
    console.log(myFavoriteMovies[i][0]);
    i++;
}*/