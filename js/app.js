'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        do {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        } 
        while (! numberOfFilms);
        personalMovieDB.count = numberOfFilms;
    },
    askQuestions: function() {
        for (let i = 1; i <= 2; i++) {
            let a, b;
            do {
                a = prompt('Один из последних просмотренных фильмов?');
            }
            while (!a || a.length > 50 );
            do {
                b = prompt('На сколько оцените его?');
            }
            while (!b || b.length > 4);
            personalMovieDB.movies[a] = b;
        }
    },
    checkCount: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else {
            alert('Призошла ошибка!');
        }   
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre;
            do {
                genre = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            while (!genre || genre.length > 50);
            personalMovieDB.genres[i - 1] = genre;
        }
    }
};

personalMovieDB.start();
console.log(personalMovieDB);
