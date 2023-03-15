// let arr = [];
//
// for (let i = 0; arr.length < 20; i++) {
//     let a = Math.floor(Math.random() * 1000)
//     if (a < 732) {
//         arr[arr.length] = a;
//     }
// }
//
// console.log(arr);

// const arr = [180, 153, 183, 585, 328, 325, 180, 79, 586, 398, 592, 197, 447, 634, 728, 707, 190, 466, 486, 78];

// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// let arr1 = [];
//
// for (let i = 2; i < arr.length; i+=3) {
//     const arrElement = arr[i];
//     if (!(arrElement%2)){
//         arr1[arr1.length] = arrElement;
//     }
// }
// console.log(arr1);

// const arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < arr.length; i++) {
//     let number = arr[i];
//     if (!(number % 2)) {
//         console.log(arr[i-1])
//     }
// }

// const arr = [100, 250, 50, 168, 120, 345, 188];

// let sum = 0;
//
// for (const number of arr) {
//     sum += number;
// }
//
// console.log(Math.floor(sum/arr.length));


// let arr2 = [];
//
//
// for (const number of arr) {
//     arr2[arr2.length] = number * 5;
// }
//
// console.log(arr2);


// const arr = [100, 'hello', 50, 168, 'hey', 345, 188];
//
// let arr2 = [];
//
// for (const arrElement of arr) {
//     if (typeof arrElement === "string") {
//         arr2[arr2.length] = arrElement;
//     }
// }
//
// console.log(arr2);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив


// let User = [];
//
// for (const usersWithIdElement of usersWithId) {
//     User[User.length] = usersWithIdElement;
//     for (const citiesWithIdElement of citiesWithId) {
//         if (citiesWithIdElement.user_id === usersWithIdElement.id) {
//             usersWithIdElement.address = citiesWithIdElement;
//         }
//
//     }
// }
//
// console.log(User);

const arr = [ 'a', 'b', 'c'];

let strig

for (const string of arr) {

}


















