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


const numberOfFilms = +prompt('Siz tomosha qilgan filimlaringiz soni?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};
const a = prompt('Oxirgi korgan filmingiz?',''),
    b = prompt('U filmni qanday baholaysiz?',''),
    c = prompt('Oxirgi korgan filmingiz?',''),
    d = prompt('U filmni qanday baholaysiz?','');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

