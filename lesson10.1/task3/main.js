// Є сторінка index.html (назва довільна), при відвідуванні
// якої в локальне сховще, в масив sessions зберігається інформація
// про дату та час відвідування сторінки. Є ще сторінка sessions.html
// (назва довільна), при відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html. Інфу НЕ виводити в
// консоль, а побудувати дом структуру під кожну сессію

console.log(new Date().toISOString());

const sessionsArr = JSON.parse(localStorage.getItem('sessions')) || [];
sessionsArr.push(new Date().toISOString());
localStorage.setItem('sessions', JSON.stringify(sessionsArr));