"use sctrict";

// console.log(-4/0);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false 

// };

// console.log(obj.name);
// console.log(obj["name"]);

// alert("hello world");

// const answer = prompt("Вам есть 18?","18");
// console.log(typeof(answer));
  
// const answers = [];

// // answers[0] = prompt('Ismingizni yozing','');
// // answers[1] = prompt('Familiyangizni yozing','');
// // answers[2] = prompt('Yoshingizni yozing','');

// document.write(answers);

// let incr = 10,
//     decr = 10;


// incr ++ ;
// decr -- ;

// console.log(incr);
// console.log(decr);


// const numberOfFilms = +prompt('Siz tomosha qilgan filimlaringiz soni?','');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };
// const a = prompt('Oxirgi korgan filmingiz?',''),
//     b = prompt('U filmni qanday baholaysiz?',''),
//     c = prompt('Oxirgi korgan filmingiz?',''),
//     d = prompt('U filmni qanday baholaysiz?','');
    
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 4) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const son = 30;

// if (son < 49) {
//     console.log('Xato'); 
// } else if ( son > 100) {
//     console.log('oshib ketti');
// } else {
//     console.log('yaxshi');
// }

// const num = 50;
// (num === 50) ? console.log('ok!') : console.log('Error');
 
// let num = 55;
//                                             SIKLLAR
// while (num <= 55){
//     console.log(num);
//     num++;
// }
let num = 50;
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i<8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i<10; i++) {
//     if ( i === 6) {
//         // break;
//         // continue;  ***ayni 6 sonini tashlab ket ***
//     }
//     console.log(i);
// }


// const numberOfFilms =+prompt('Nechta filim tomosha qildingiz', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for ( let i=0; i < 2; i++) {
//     const a =prompt ('Ohirgi tomosha qilgan filmingiz?', ''),
//           b =prompt (' Uni qanday baholaysiz?','');
         

// if ( a !=null && b !=null && a !='' && b !='' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
// } else { 
//     console.log ('error');
//     i --;

//    }
// }


//     if (personalMovieDB.count < 10) {
//         console.log('Ancha kam film tomosha qilibsiz!');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
//         console.log('Siz kino muxlisi ekansiz!')
//     } else if (personalMovieDB.count >=30) {
//         console.log(' siz kino jinnisiz!');
//     } else {
//         console.log ('Xatolik yuz berdi');
//     }

//     console.log (personalMovieDB);

// let sequence = [ 1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < sequence.length; i++) {
//     console.log(sequence[i]);
// }
// ************************
// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// 'use strict';
// ******************************

// Код возьмите из предыдущего домашнего задания

let numberOfFilms ;
 function start() {
    numberOfFilms = +prompt('Siz tomosha qilgan filimlaringiz soni?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Siz tomosha qilgan filimlaringiz soni?','');
    }
 }

//  start();
 


const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
    
    
    function rememberMyFilms() {
        for ( let i=0; i < 2; i++) {
            const a =prompt ('Ohirgi tomosha qilgan filmingiz?', ''),
                  b =prompt (' Uni qanday baholaysiz?','');
                 
        
        if ( a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else { 
            console.log ('error');
            i --;
        
           }
        }
    }

    // rememberMyFilms();
    
        function detectPersonalLevel() {
            if (personalMovieDB.count < 10) {
                console.log('Ancha kam film tomosha qilibsiz!');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
                console.log('Siz kino muxlisi ekansiz!')
            } else if (personalMovieDB.count >=30) {
                console.log(' siz kino jinnisiz!');
            } else {
                console.log ('Xatolik yuz berdi');
            }
        }
        // detectPersonalLevel();

        function showMyDB (hidden) {
            if(!hidden) {
                console.log(personalMovieDB);
            }
        }

        showMyDB(personalMovieDB.privat);

        function writeYourGenres() {
            for ( let i = 1; i <= 3; i++) {
                personalMovieDB.genres[i - 1] = prompt (`Sizning yoqtirgan janringiz tartib raqami ${i}`);
            }
        }

        writeYourGenres();