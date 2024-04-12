'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        do {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        } 
        while (! personalMovieDB.count);
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
        personalMovieDB.genres.forEach(function(genre, i) {
            console.log(`Любимый жанр ${i + 1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = personalMovieDB.privat ? false : true;
    }
};

personalMovieDB.writeYourGenres();
