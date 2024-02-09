'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

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

if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
    alert('Просмотрено довольно мало фильмов!');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert('Вы классический зритель!');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман!');
} else {
    alert('Призошла ошибка!');
}

console.log(personalMovieDB.count);

console.log(NaN === 0);
