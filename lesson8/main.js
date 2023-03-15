/ - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const users = [
//     new User(2, 'Petro', 'Petriv', 'asd@gmail.com'),
//     new User(3, 'Vasyl', 'Vasyliv', 'asd@gmail.com'),
//     new User(4, 'Andrii', 'Boiko', 'asd@gmail.com'),
//     new User(5, 'Nataly', 'Boiko', 'asd@gmail.com'),
//     new User(6, 'Nataly', 'Boiko', 'asd@gmail.com'),
//     new User(7, 'Ihor', 'Ihorovych', 'asd@gmail.com'),
//     new User(8, 'Oleg', 'Olegovich', 'asd@gmail.com'),
//     new User(9, 'Nataly', 'Boiko', 'asd@gmail.com'),
//     new User(10, 'Nataly', 'Boiko', 'asd@gmail.com'),
//     new User(1, 'Ivan', 'Ivaniv', 'asd@gmail.com'),
//
// ]
// console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(users.filter(value => {
//     if (value.id%2 === 0){
//         return true;
//     }
// }));

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(users.sort((a, b) => b.id - a.id));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }


// створити пустий масив, наповнити його 10 об'єктами Client

// const clients = [
//     new Client(1, 'Andrii', 'Boiko', 'asd@gmail.com', '0671985635', ['milk', 'cacao']),
//     new Client(2, 'Andrii', 'Boiko', 'asd@gmail.com', '0671985635', ['milk', 'cacao', 'bread']),
//     new Client(3, 'Andrii', 'Boiko', 'asd@gmail.com', '0671985635', ['milk', 'cacao', 'bread', 'cheese']),
//     new Client(4, 'Andrii', 'Boiko', 'asd@gmail.com', '0671985635', ['milk', 'cacao', 'cheese', 'apple', 'lemon']),
//
// ]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

// const sort = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function Car(model, producer, year, maxSpeed, engine) {
//     // // this.model = model;
//     // // this.producer = producer;
//     // this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`
//         model - ${model}
//         producer - ${producer}
//         year - ${year}
//         maxSpeed - ${maxSpeed}
//         engine - ${engine}
//         `)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newYear) {
//         year = newYear;
//     }
//     this.addDriver = function ({driver}) {
//         this.driver = "driver";
//     }
// }
//
// const car = new Car('BMW', 'German', 2020, 160 ,2.5)
// car.info();

// car.drive();
// car.increaseMaxSpeed(20);
// car.changeYear(2021);
// car.addDriver({name})
//
//
// car.info();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Cinderella(name, age, sizeFood) {
//     this.name = name;
//     this.age = age;
//     this.sizeFood = sizeFood;
// }
//
// const cinderellas = [
//     new Cinderella('Nataly', 25, 36),
//     new Cinderella('Inna', 23, 38),
//     new Cinderella('Maryna', 29, 39),
//     new Cinderella('Olga', 18, 41),
//
// ]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// const prince = new Prince('Vasia', 25, 41);
//
// for (const cinderella of cinderellas) {
//     if (cinderella.sizeFood === prince.shoeSize) {
//         console.log(cinderella)
//     }
// }
//
// console.log(cinderellas.find(value => value.sizeFood === prince.shoeSize));

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


}
