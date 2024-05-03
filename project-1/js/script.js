/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Одержимость",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv');

adv.querySelector('.promo__adv-title').remove();

adv.querySelectorAll('img').forEach(img => {
    img.remove();
})

document.querySelector('.promo__genre').textContent = 'Драма';

document.querySelector('.promo__bg').style.background = 'url(img/bg.jpg) center center/cover no-repeat';

const listOfMovies = document.querySelector('.promo__interactive-list');

let {movies} = movieDB;
movies.sort();

movies.forEach



// function watchedMovies (movies) {

// }

