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
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// Первая задача: Удалить все рекламные блоки со страницы (правая часть сайта)
const promoAdv = document.querySelector('.promo__adv');

promoAdv.innerHTML = '';

// Вторая задача: Изменить жанр фильма, поменять "комедия" на "драма"

const promoGenre = document.querySelector('.promo__genre');

promoGenre.textContent = 'ДРАМА';

//Третья задача: Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS

const promoBg = document.querySelector('.promo__bg');

promoBg.style.background = 'url(../img/bg.jpg) center center / cover no-repeat';

//Четвертая задача: Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
//Пятая задача: Добавить нумерацию выведенных фильмов

const promoInteractiveList = document.querySelector('.promo__interactive-list');
const {movies} = movieDB;
movies.sort();

promoInteractiveList.innerHTML = '';

movies.forEach( function (item, i) {
	promoInteractiveList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}<div class="delete"></div></li>`;
})




