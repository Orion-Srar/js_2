// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

// i=0;
// while (i < arr.length){
//     console.log(arr[i])
//     i++;
// }

//     2. перебрати його циклом for

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i = 0;
// while (i < arr.length) {
//     const arrElement = arr[i];
//
//     if (!(i%2)){
//         console.log(arrElement)
//     }
//     i++;
//}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     if (i%2){
//         console.log(arrElement);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// i = 0;
// while (i < arr.length) {
//     const arrElement = arr[i];
//     if (!(arrElement%2)){
//         console.log(arrElement);
//     }
//
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for (const number of arr) {
//     if (!(number%2)){
//         console.log(number);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr1 = [];
//
// for (const number of arr) {
//     if (!(number % 3)) {
//         arr1[arr1.length] = 'okten';
//     } else {
//         arr1[arr1.length] = number;
//     }
// }
// console.log(arr1);
// console.log(arr);

// 8. вивести масив в зворотньому порядку.

// for (let i = arr.length - 1; i >= 0; i--) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//

// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// for (const number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// const arr = [2, 'hello', 13, 6, true, 31, 'world', false, 100, -18];

// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement)
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи;
//
// for (const arrElement of arr) {
//     if (typeof arrElement === "number"){
//         console.log(arrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//

// for (const arrElement of arr) {
//     if (typeof arrElement === "string"){
//         console.log(arrElement)
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr = [];
// arr[0] = 1;
// arr[1] = 'world';
// arr[2] = true;
// arr[3] = 5;
// arr[4] = 25;
// arr[5] = false;
// arr[6] = 95;
// arr[7] = -19;
// arr[8] = 'hello';
// arr[9] = true;
//
// console.log(arr);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h3>${i}</h3>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<h3>${i}</h3>`);
// }

// - Створити цикл for на 100 і3терацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор