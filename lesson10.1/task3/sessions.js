const sessionsArr = JSON.parse(localStorage.getItem('sessions'));

for (const date of sessionsArr) {
    console.log(date);
    const divElement = document.createElement('div');
    divElement.innerText = `Date: ${new Date(date)}`
    document.body.appendChild(divElement);
}