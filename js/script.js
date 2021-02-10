"use strict";

/*const obj = {
  name: "Bob",
  age: 25,
  isMarried: false,
};*/
//console.log(obj.name, 'age', obj.age);

// let arr = ['test', 'variant', 3, {}, []];
//console.log(arr['4'], arr[0]);

//const result = confirm("Are you here?");
//console.log(result);

// const answer = +prompt("Вам есть 18?", "");
// console.log(answer + 5);

// const answers = [];
// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");
// document.write(answers);
// console.log(typeof(answers));

// const category = "toys";
// console.log(`https://othersite.com/${category}/5`);

// const user = "Galina";
// console.log(`Привет, ${user}`);

// let incr = 10,
//     decr = 10;
// incr++;
// decr--;
// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8);

// const num = 50;

// if (num < 49) {
//   console.log("error");
// } if (num > 100) {
//   console.log("error");
// } else {
//   console.log("ok");
// }

// (num === 50) ? console.log("ok") : console.log("error");

// const num = 50;

// switch (num) {
//     case 49:
//       console.log('меньше');
//       break;
//     case 100:
//       console.log('больше');
//       break;
//     case 51:
//       console.log('верно');
//     break;
//     default:
//       console.log('ничего не подходит');
// }

// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// } while (num < 58);

// for (let i = 0; i < 8; i++) {
//     if (i == 6) {
//       break;
//       continue;
//     }
//   console.log(num);
//   num++;
// }

// let i = 0;

// for (i = 0; i < 3; i++) { // используем существующую переменную
//   console.log(i); // 0, 1, 2
// }

// console.log(i);

// let i = 0;
// while (i++ < 5) console.log( i );

// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   num = 10;
// }

// showFirstMessage("Hello World!");

// console.log(num);

// function calc(a, b) {
//   return(a + b);
// }

// console.log(calc(4, 7));

// const logger = function() {
//   return "hello";
// };

// alert(logger());

// let addNumber = +prompt("Введите число", "0");

// if (addNumber > 0) {
//   alert(1);
// } else if (addNumber < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let login = prompt("Rnj ds?", "");

// let message = (login == 'Сотрудник') ? 'Привет' : 
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' : '';

// alert(message );

// let whosThere = prompt("Кто там?", "");

// if (whosThere == "Админ") {
//   let passName = prompt("Введите пароль", "");
//   if (passName == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (passName == null) {
//     alert("Отмена");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (whosThere == null) {
//   alert("Отмена");
// } else {
//   alert("Я вас не знаю");
// }

// let sum = 0;

// while (true) {
//   let value = +prompt("Введите число", "");
//   if (!value) break;  
//   sum += value;
// }
// alert(sum);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) continue;
//     console.log(i); 
// }

// let i = 0;
// while (++i < 5) {console.log( i );}

// let i = 0;
// while (i++ < 5) {console.log( i );}

// for (let i = 0; i < 5; i++) {console.log( i );}
// for (let i = 0; i < 5; ++i) {console.log( i );}

// let num;
// do {
//   num = prompt("ввести число, большее 100", "");
// } while (num < 100 && num !== null);

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   console.log( i );
// }

