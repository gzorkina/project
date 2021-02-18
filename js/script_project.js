"use strict";

let numberOfFilms;

function start() {
  do {

    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  } while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));

  return numberOfFilms;
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

function rememberMyFilms() {
  let a,
      b;
  for (let i = 0; i < 2; i++) {
    do {
        a = prompt("Один из последних просмотренных фильмов?", "");
        b = prompt("На сколько оцените его?", "");
    } while (a == "" || a === null || a.length > 50 || b == "" || b === null || b.length > 50);
    personalMovieDB.movies[a] = b;
    
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
  } else {
    alert("Произошла ошибка");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
  }
}

writeYourGenres();

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?", ""),
//           b = prompt("На сколько оцените его?", "");

//     if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }