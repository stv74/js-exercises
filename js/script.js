'use strict';

// let numberOfFilms;

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// askQuestions();
// checkCount();
// writeYourGenres();
// showMyDB();

// function start() {
//     do {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     } 
//     while (! numberOfFilms);
// }

// function askQuestions() {
//     for (let i = 1; i <= 2; i++) {
//         let a, b;
//         do {
//             a = prompt('Один из последних просмотренных фильмов?');
//         }
//         while (!a || a.length > 50 );
//         do {
//             b = prompt('На сколько оцените его?');
//         }
//         while (!b || b.length > 4);
//         personalMovieDB.movies[a] = b;
//     }
// }

// function checkCount() {
//     if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
//         alert('Просмотрено довольно мало фильмов!');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         alert('Вы классический зритель!');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман!');
//     } else {
//         alert('Призошла ошибка!');
//     }
// }

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let genre;
//         do {
//             genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
//         while (!genre || genre.length > 50);
//         personalMovieDB.genres[i - 1] = genre;
//     }    
// }

function getTimeFromMinutes(allMinutes) {
    if ( !Number.isInteger( allMinutes ) || allMinutes < 0 || allMinutes > 600 ) {
        return 'Ошибка, проверьте данные!';
    }

    const hours = Math.trunc( allMinutes / 60 ); 
    const minutes = allMinutes - (hours * 60);
    
    return `${hours} часов, ${minutes} минут`;
}

console.log(getTimeFromMinutes(150));

