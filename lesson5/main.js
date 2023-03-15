// function f() {
//     const nowTime =Math.floor(new Date().getTime()/1000)
//     // console.log(nowTime);
//
//     let newYear = Math.floor(new Date('2024-01-01 00:00:00').getTime())
//     // console.log(newYear);
//
//     const difference = newYear - nowTime;
//
//     const day = Math.floor(difference/86400);
//     const hour = Math.floor((difference/60/60))%24;
//     const minutes = Math.floor((difference/60)%60);
//     const second = Math.floor((difference%60));
//
//     console.log(`day:${day} hour:${hour} minutes:${minutes} second:${second}`);
//
// }
//
// setInterval(f,1000)

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function filter(array, predicateFn) {
//     let filterArray = [];
//     for (const item of array) {
//         if (predicateFn(item)) {
//             filterArray.push(item);
//         }
//     }
//     return filterArray;
// };
//
// // console.log(filter(users, (user) => user.age > 30));
//
// console.log(filter(users, (user) => user.age > 30));
//
// let reduce = users.reduce((previousValue, currentValue)=>{
//     if (currentValue.status) {
//         previousValue.man.push(currentValue);
//     }else {
//         previousValue.woman.push(currentValue);
//     }
//     return previousValue;
// },{man: [], woman: []});
//
// console.log(reduce);


