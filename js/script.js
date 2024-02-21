/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
    
    function addMoviesList () {
        movies.sort();
        promoInteractiveList.innerHTML = '';
        
        movies.forEach( function (item, i) {
            if (item.length > 21) {
                item = item.slice(0, 21) + '...'; // Если название фильма больше 21 символа, обрезать его и добавить ...
            }
            promoInteractiveList.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}<div class="delete"></div></li>`;
        });
        // Добавляем функционал удаления фильма по нажатию на корзинку
        const deleteFilm = document.querySelectorAll('.delete');
        deleteFilm.forEach((item, i) => {
            item.addEventListener('click', function () {
                movies.splice(i, 1);
                addMoviesList();
            })
        })
    }
    addMoviesList();
    
    //Шестая задача: Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - новый фильм добавляется в список. Страница не должна перезагружаться. Новый фильм должен добавляться в movieDB.movies. Для получения доступа к значению input - обращаемся к нему как input.value. 
    
    const input = document.querySelector('.adding__input');
    const button = document.querySelector('.add button');
    const checkbox = document.querySelector('#checkbox');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        if (input.value) {
            movies.push(input.value.toUpperCase());
            // При выборе чекбокса выводим в консоль сообщение
            if (checkbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            addMoviesList();
        }
        
        input.value = '';
    });
})








