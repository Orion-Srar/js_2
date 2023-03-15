const url = new URL(location.href);
const userid = url.searchParams.get('userid');

async function foo() {
    const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`).then(response => response.json());
    const wrap = document.createElement('div');
    wrap.setAttribute('id', 'wrap');

    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    wrap.appendChild(container);

    function openUser(obj) {
        for (const key in obj) {
            const objElement = obj[key];

            if ((typeof objElement) === 'object') {
                const div2 = document.createElement('div');
                div2.innerText = `${key}:`
                container.appendChild(div2);
                openUser(objElement);
            } else {
                const div = document.createElement('div');
                div.innerText = `${key}: ${objElement}`;
                container.appendChild(div);

            }
        }
    }

    openUser(user);

    fetch(` https://jsonplaceholder.typicode.com/users/${userid}/posts`)
        .then(response => response.json())
        .then(posts => {
            const divPosts = document.createElement('div');
            divPosts.setAttribute('id', 'posts');
            divPosts.setAttribute('class', 'visible');
            wrap.appendChild(divPosts);

            for (const post of posts) {
                const divTitle = document.createElement('div');
                divTitle.setAttribute('id', 'title');
                divTitle.innerText = `${post.id}.${post.title}`;

                const button = document.createElement('button');
                button.innerText = 'Post details';
                button.onclick = function () {
                    location.href = `post-details.html?userId=${user.id}`
                }

                divPosts.append(divTitle, button);
            }
        });

    const button = document.createElement('button');
    button.innerText = 'Post of current user';

    const buttonHome = document.createElement('button');
    buttonHome.innerText = 'Back';


    button.onclick = function () {
        const postsDiv = document.getElementById('posts');
        postsDiv.classList.toggle('visible');

    }

    buttonHome.onclick = function () {
        location.href = 'index.html';
    }

    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons');
    wrap.appendChild(buttons);


    buttons.append(buttonHome, button);
    document.body.appendChild(wrap);
}


foo();
