const btn = document.getElementById('btn-kick');
const superBtn = document.getElementById('btn-super-kick');

const character = {
    name: 'Pikachu',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-character'),
    elementProgressBar: document.getElementById('progressbar-character'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
    changeHP: changeHP
}

const enemy = {
    name: 'Charmander',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-enemy'),
    elementProgressBar: document.getElementById('progressbar-enemy'),
    renderHP: renderHP,
    renderHPLife: renderHPLife,
    renderProgressBarHP: renderProgressBarHP,
    changeHP: changeHP
}

btn.addEventListener('click', function () {
    character.changeHP(random(20));
    enemy.changeHP(random(20));
})

superBtn.addEventListener('click', function () {
    character.changeHP(random(20, true));
    enemy.changeHP(random(20, true));
})

function init() {
    character.renderHP();
    enemy.renderHP();
}

function renderHP() {
    this.renderHPLife();
    this.renderProgressBarHP();
}

function renderHPLife() {
    this.elementHP.innerText = this.demageHP + ' / ' + this.defaultHP;
}

function renderProgressBarHP() {
    this.elementProgressBar.style.width = this.demageHP + '%';
}

function changeHP(count) {
    if (this.demageHP < count) {
        this.demageHP = 0;
        alert('Покемон ' + this.name + ' проиграл!')
        btn.disabled = true;
        superBtn.disabled = true;
    } else {
        this.demageHP -= count;
    }
    this.renderHP();
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