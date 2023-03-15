function foo() {
    const item = JSON.parse(localStorage.getItem('sessions'));
    for (const itemElement of item) {
        const date = new Date(itemElement.date);
        console.log(date);


        const wrap = document.createElement('div');
        wrap.classList.add('wrap');

        const div = document.createElement('div');
        const div2 = document.createElement('div');

        div.innerText = `Дата:${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        div2.innerText = `Час:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        wrap.append(div, div2);
        document.body.appendChild(wrap);
    }
}

foo();