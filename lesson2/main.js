// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//const arr = [1, 2, 3, 4, 5, true, 'hey'];
// console.log(arr[0]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// const book1 = {
//     title: 'Harry Poter',
//     pageCount: 520,
//     genre: 'fantasy'
// }
// const book2 = {
//     title: 'Tygrolovy',
//     pageCount: 319,
//     genre: 'roman'
// }
// const book3 = {
//     title: 'Kobzar',
//     pageCount: 519,
//     genre: 'Zbirka tvoriv'
// }


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// const book4 = {
//     title: 'Harry Poter',
//     pageCount: 520,
//     genre: 'fantasy',
//     authors: [
//         {name: 'Bober', age: 52}
//     ]
// }
// const book5 = {
//     title: 'Tygrolovy',
//     pageCount: 319,
//     genre: 'roman',
//     authors: [
//         {name: 'Ivan', age: 52}
//     ]
// }
// const book6 = {
//     title: 'Kobzar',
//     pageCount: 519,
//     genre: 'Zbirka tvoriv',
//     authors: [
//         {name: 'Petro', age: 32},
//         {name: 'Vasil', age: 23}
//     ]
// }


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// const users = [
//     {name: 'Ivan', username: 'Ivaniv', password: 1111},
//     {name: 'Petro', username: 'Petrov', password: 2222},
//     {name: 'Vasil', username: 'Vasiliv', password: 3333},
//
// ]


//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// const x = 1;
//
// if (x === 0) {
//     console.log(false);
// } else {
//     console.log(true);
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
// const time = 456;
// if (0 <= time && time <= 15) {
//     console.log('перша чверть');
// } else if (15 < time && time <= 30) {
//     console.log('друга чверть');
// } else if (30 < time && time <= 45) {
//     console.log('третя чверть');
// } else if (45 < time && time < 60) {
//     console.log('четверта чверть');
// }else {
//     console.log('WTF');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// const day = 25;
// if (day >= 0 && day <= 10){
//     console.log('перша декада');
// }else if (day > 10 && day <= 20) {
//     console.log('друга декада');
// }else if (day > 20 && day <= 31) {
//     console.log('третя декада');
// }else{
//     console.log('WTF');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// const day = 5;
// switch (day) {
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//         console.log('Monday');
//         break;
//     case 3:
//         console.log('Tuesday');
//         break;
//     case 4:
//         console.log('Wednesday');
//         break;
//     case 5:
//         console.log('Thursday');
//         break;
//     case 6:
//         console.log('Friday');
//         break;
//     case 7:
//         console.log('Saturday');
//         break;
//     default:
//         console.log('Sorry your number is not correct!!!')
//
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//
// const a = 4;
// const b = 4;
//
// if (a > b) {
//     console.log('a is bigger')
// } else if (b > a) {
//     console.log('b is bigger')
// } else {
//     console.log('a=b')
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x = 0;
// if (!!x === false) {
//     x = 'default'
// }

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
//
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i]['monthDuration'] > 6) {
//     console.log('Super')
// }
// }































