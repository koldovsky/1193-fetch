const greetings = [
    'Вітаю!',
    'Привіт!',
    'Hello!',
    'Hi!',
    'Halo!',
    'Salut!',
    'Hoi'
];

function getRandomEl(arr) {
    return arr[ Math.floor(Math.random() * arr.length) ];
}

const h1 = document.querySelector('h1');
h1.innerText = getRandomEl(greetings);