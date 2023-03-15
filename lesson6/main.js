// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const a ='hello world';
// const b = 'lorem ipsum';
// const c = 'javascript is cool'
//
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// const a ='hello world';
// const b = 'lorem ipsum';
// const c = 'javascript is cool'
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// const a ='HELLO WORLD';
// const b = 'LOREM IPSUM';
// const c = 'JAVASCRIPT IS COOL'
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// function stringToarray(str) {
//     console.log(str.split(' '));
// }
//
// stringToarray(str);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// const arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
//
// arr.map(n => n.toString())

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11, 21, 3];
//
// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         console.log(nums.sort((a, b) => a - b));
//     }
//     if (direction === 'descending') {
//         console.log(nums.sort((a, b) => b - a));
//     }
// }
//
// sortNums(nums, 'ascending');
// sortNums(nums, 'descending');

//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// const arr = coursesAndDurationArray.map((value,id) => ({id: id, title: value.title, monthDuration: value.monthDuration}))
// console.log(arr);


// =========================
//     описати колоду карт (від 6 до туза без джокерів)

// function Card(value, suit, color) {
//     this.value = value;
//     this.suit = suit;
//     this.color = color;
// }
//
// const carts = [
//     new Card('6', 'spade' , 'black'),
//     new Card('6', 'diamond' , 'red'),
//     new Card('6', 'heart' , 'red'),
//     new Card('6', 'clubs' , 'black'),
//     new Card('7', 'spade' , 'black'),
//     new Card('7', 'diamond' , 'red'),
//     new Card('7', 'heart' , 'red'),
//     new Card('7', 'clubs' , 'black'),
//     new Card('8', 'spade' , 'black'),
//     new Card('8', 'diamond' , 'red'),
//     new Card('8', 'heart' , 'red'),
//     new Card('8', 'clubs' , 'black'),
//     new Card('9', 'spade' , 'black'),
//     new Card('9', 'diamond' , 'red'),
//     new Card('9', 'heart' , 'red'),
//     new Card('9', 'clubs' , 'black'),
//     new Card('10', 'spade' , 'black'),
//     new Card('10', 'diamond' , 'red'),
//     new Card('10', 'heart' , 'red'),
//     new Card('10', 'clubs' , 'black'),
//     new Card('jack', 'spade' , 'black'),
//     new Card('jack', 'diamond' , 'red'),
//     new Card('jack', 'heart' , 'red'),
//     new Card('jack', 'clubs' , 'black'),
//     new Card('queen', 'spade' , 'black'),
//     new Card('queen', 'diamond' , 'red'),
//     new Card('queen', 'heart' , 'red'),
//     new Card('queen', 'clubs' , 'black'),
//     new Card('king', 'spade' , 'black'),
//     new Card('king', 'diamond' , 'red'),
//     new Card('king', 'heart' , 'red'),
//     new Card('king', 'clubs' , 'black'),
//     new Card('ace', 'spade' , 'black'),
//     new Card('ace', 'diamond' , 'red'),
//     new Card('ace', 'heart' , 'red'),
//     new Card('ace', 'clubs' , 'black'),
// ];


// - знайти піковий туз
//  const king = carts.find(value => value.value === 'king' && value.suit === 'spade')
// console.log(king);

// - всі шістки

// console.log(carts.filter(value => value.value === '6'));

// - всі червоні карти

// const red = carts.filter(value => value.color === 'red')
// console.log(red);

// - всі буби

// const diamond = carts.filter(value => value.suit === 'diamond');
// console.log(diamond);

// - всі трефи від 9 та більше

// const clubs = carts.filter(value => value.suit === 'clubs' && value.value > 9 || value.suit === 'clubs' && value.value === 'jack'||
//     value.suit === 'clubs' && value.value === 'queen'|| value.suit === 'clubs' && value.value === 'king'||
//     value.suit === 'clubs' && value.value === 'ace');
//
// console.log(clubs);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// const suit = carts.reduce((previousValue, currentValue) => {
//     if (currentValue.suit === 'spade'){
//         previousValue.spades.push(currentValue);
//     }
//     if (currentValue.suit === 'diamond'){
//         previousValue.diamonds.push(currentValue);
//     }
//     if (currentValue.suit === 'heart'){
//         previousValue.hearts.push(currentValue);
//     }
//     if (currentValue.suit === 'clubs'){
//         previousValue.clubs.push(currentValue);
//     }
//
//     return previousValue;
//
// }, {spades: [], diamonds: [], hearts: [], clubs: []} )
//
// console.log(suit);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass', 'hello']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

const arr = coursesArray.filter(value => {
    for (const module of value.modules) {
        if (module === 'docker') {
            return true;
        }
    }
});

console.log(arr);


// --написати пошук всіх об'єктів, в який в modules є docker