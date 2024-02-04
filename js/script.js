'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= 2; i++) {
    let a, b;
    do {
        a = prompt('Один из последних просмотренных фильмов?');
    }
    while (!a || a === null || a.length > 50 );
    do {
        b = prompt('На сколько оцените его?');
    }
    while (!b || b === null || b.length > 4);
    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

