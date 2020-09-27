const btn = document.getElementById('btn-kick');
const superBtn = document.getElementById('btn-super-kick');

const character = {
    name: 'Pikachu',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-character'),
    elementProgressBar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-enemy'),
    elementProgressBar: document.getElementById('progressbar-enemy'),
}

btn.addEventListener('click', function () {
    changeHP(random(20), character);
    changeHP(random(20), enemy);
})

superBtn.addEventListener('click', function () {
    changeHP(random(20, true), character);
    changeHP(random(20, true), enemy);
})

function init() {
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressBarHP(person);
}

function renderHPLife(person) {
    person.elementHP.innerText = person.demageHP + ' / ' + person.defaultHP;
}

function renderProgressBarHP(person) {
    person.elementProgressBar.style.width = person.demageHP + '%';
}

function changeHP(count, person) {
    if (person.demageHP < count) {
        person.demageHP = 0;
        alert('Покемон ' + person.name + ' проиграл!')
        btn.disabled = true;
    } else {
        person.demageHP -= count;
    }
    renderHP(person);
}

function random(num, isSuper) {
    let random = 0;
    if (isSuper) {
        let max = num * 1.5;
        let min = num * 0.5;
        random = min + Math.random() * (max + 1 - min);
    } else {
        random = Math.random() * num;
    }

    return Math.ceil(random);
}

init();