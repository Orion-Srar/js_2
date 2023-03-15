const url = new URL(location.href);
const userId = url.searchParams.get('userId');

async function foo() {
    const posts = await fetch(` https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(response => response.json());
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    for (const post of posts) {
        const wrap = document.createElement('div');
        container.appendChild(wrap);
        wrap.setAttribute('id', 'wrap');
        console.log(post);
        wrap.innerHTML = `<h3>${post.title}</h3><div>${post.body}</div>`

    }
    const buttonBack = document.createElement('button');
    buttonBack.innerText = 'Back';
    buttonBack.onclick = function () {
        location.href = `user-details.html?userid=${userId}`;
        console.log(userId);

    }

    const buttonHome = document.createElement('button');
    buttonHome.innerText = 'Home';
    buttonHome.onclick = function f() {
        location.href = 'index.html';
    }

    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');
    container.appendChild(buttons);
    buttons.append(buttonHome, buttonBack)
}

foo();