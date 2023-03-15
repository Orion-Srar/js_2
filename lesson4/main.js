// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function area(a, b) {
//     return a * b;
// }
//
// console.log(area(5, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function area(r) {
//     return 3.14 * r * r;
// }
//
// console.log(area(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function area(h, r) {
//     return (3.14 * r * r) * h;
// }
//
// console.log(area(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arr(ar) {
//     for (const arElement of ar) {
//         console.log(arElement);
//     }
// }
//
// arr([1, 2, 3, 4])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo() {
//     document.write(`<h3>${arguments[0]}</h3>`)
// }
//
// foo('Lorem ipsum dolor sit amet.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(text) {
//     return document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>`)
// }
//
// foo('hello');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл

// function foo(text, n) {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// foo('hello', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function foo(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// let arr = [1, 2, 4, 'hello', true];
//
// foo(arr);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function foo(items) {
//     for (const item of items) {
//         document.write(`<div>`)
//         for (const itemKey in item) {
//             document.write(`<div>${itemKey}: ${item[itemKey]}</div>`)
//         }
//         document.write(`</div>`)
//     }
// }
//
//
// const arr = [
//     {id:1, name: 'Andrii', age: 25},
//     {id:2, name: 'Ivan', age: 32},
//     {id:3, name: 'Petro', age: 28},
// ];
//
// foo(arr);


// - створити функцію яка повертає найменьше число з масиву

// function foo(items) {
//     let a = items[0];
//     for (const item of items) {
//         if (item < a) {
//             a = item;
//         }
//     }
//     return a;
// }
//
// const arr = [12, 25, 84, -65, 89, 45, 23];
//
// console.log(foo(arr));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// function sum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     console.log(sum);
// }
//
// const arr = [1, 2, 10];
//
// sum(arr);


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr, index1, index2) {
//     let x = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = x;
//     console.log(arr);
// }
//
// swap([11,22,33,44],0,3)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const currencyValue of currencyValues) {
//         if (currencyValue['currency'] === exchangeCurrency) {
//             console.log(sumUAH / currencyValue['value']);
//         }
//     }
// }
//
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')



















