// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати
// данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,' +
// ' під формою з'явився блок з вашим об'єктом

const user = document.forms.user;

user.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    const surname = this.surname.value;
    const age = this.age.value;

    const box = document.getElementById('box');
    box.innerText = `${name} ${surname} ${age}`

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';
};

