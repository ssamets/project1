"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt("Один из просмотренных фильмов?", ""),
                ratingFilm = prompt("На сколько вы его оцените?", "");
            if (!lastFilm || lastFilm === "" || lastFilm.length > 50 || !ratingFilm || ratingFilm === "" || ratingFilm.length > 50) {
                i--;
                continue;
            }
            personalMovieDB.movies[lastFilm] = ratingFilm;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let yourGenre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            // if (!yourGenre || yourGenre === "") {
            //     i--;
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     continue;
            // }
            // personalMovieDB.genres[i - 1] = yourGenre;

            let yourGenres = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
            if (!yourGenres || yourGenres === "") {
                i--;
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                continue;
            }
            personalMovieDB.genres = yourGenres.split(', ');
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};

// personalMovieDB.start();
//
// personalMovieDB.rememberMyFilms();
//
// personalMovieDB.detectPersonalLevel();
//
// personalMovieDB.writeYourGenres();
//
// personalMovieDB.toggleVisibleMyDB();
//
// personalMovieDB.showMyDB(personalMovieDB.privat);



