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
//   num = prompt("ввести число, большее 100", "0");
// } while (num <= 100 && num != null);

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   console.log( i );
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// let num = 12.567;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log(num.toFixed(2));
// console.log(num.toString(16));
// console.log((0.28 * 100 + 0.14 * 100) / 100);
// console.log(4e6);
// console.log(5e-6);
// console.log(isFinite("str"));
// console.log(parseInt("45kj"));
// console.log(parseInt("jh767kj"));
// console.log(parseFloat("6.7sthss"));
// console.log(parseFloat("wer5.6"));
// console.log(Math.random());
// console.log(Math.max(78, 4, -5, 67));
// console.log(Math.min(78, 4, -5, 67));
// console.log(Math.pow(4, 5));
// console.log("Math.max(78, 4,\n -5, 67)".length);

// let str = "Letter for my friend!";

// console.log(str[7]);
// console.log(str[100]);
// console.log(str.charAt(100));
// console.log(str.length);
// console.log(str[str.length - 1]);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str[14].toUpperCase());
// console.log(str.indexOf("f"));
// console.log(str.indexOf("f", 8));
// console.log(str.includes("f", 15));
// console.log(str.startsWith("L"));
// console.log(str.endsWith("!"));

// let str = "stringify";
// console.log(str.slice(0, 5));
// console.log(str.slice(5));
// console.log(str.slice(-4, -1));
// console.log(str.substring(5, 0));
// console.log(str.substring(5));
// console.log(str.substr(0, 3));
// console.log(str.substr(5));
// console.log(str.codePointAt(5));
// console.log(String.fromCodePoint(80));
// console.log("Tfheywkr".localeCompare("Kjriehru4"));

// for (let char of "Hello") {
//   console.log(char);
// }

// let str = 'Hi';
// str = 'h' + str[1]; // заменяем строку
// console.log(str); // hi

// let age = prompt("Введите свой возраст", "");

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// checkAge(age);

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function pow(x, n) {
//   let result = x;
//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// let x,
//     n;
// do {
//   x = +prompt("Введите целое число x", "");
//   n = +prompt("Введите целое число n", "");
// } while (n < 1);
    
// console.log(pow(x, n));

// let num1 = +prompt("Введите число1", ""),
//     num2 = +prompt("Введите число2", "");

// console.log(num1 + num2);

// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));
// console.log(Math.round(6.35 * 10) / 10);

// function readNumber() {
//   let num;

//   do {
//     num = +prompt("Введите число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return num;
// }

// console.log(`Число: ${readNumber()}`);

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// console.log(random(1, 5));
// console.log(random(1, 5));
// console.log(random(1, 5));

// function randomInteger(min, max) {
//   let result = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(result);
// }
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));
// console.log(randomInteger(1, 5));

// for (let char of "Hello") {
//   console.log(char);
// }

// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("qwerty"));

// function ucFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("test"));

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes("viagra") || str.includes("xxx");
// } 
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// function truncate(str, maxlength) {
//   return str.length < maxlength ? str : str.slice(0, maxlength - 1) + "…";
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));
// console.log(truncate("", 0));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));

// let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x;
//   };
// }
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

// function sayHiBye(firstName, lastName) {

//   console.log("Привет, " + getFullName());
//   console.log("Пока, " + getFullName());

//   function getFullName() {
//     return firstName + " " + lastName;
//   }

// }

// sayHiBye("Вася", "Пупкин");

// say('Вася');

// var phrase = 'Привет';

// function say(name) {
//   console.log(name + ", " + phrase);
// }

// var value = 0;

// function f() {
//   if (1) {
//     value = true;
//   } else {
//     var value = false;
//   }

//   console.log( value );
// }

// f();