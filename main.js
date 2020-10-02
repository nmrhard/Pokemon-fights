const btn = document.getElementById('btn-kick');
const superBtn = document.getElementById('btn-super-kick');

const elementBody = document.querySelector('.body');
const elementLogs = document.createElement('div');
const elementLogsList = document.createElement('ul');

elementLogs.id = 'logs';
elementBody.appendChild(elementLogs);

elementLogsList.classList.add('logs-list');
elementLogs.appendChild(elementLogsList);


const character = {
    name: 'Pikachu',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-character'),
    elementProgressBar: document.getElementById('progressbar-character'),
    renderHP,
    renderHPLife,
    renderProgressBarHP,
    changeHP
}

const enemy = {
    name: 'Charmander',
    defaultHP: '100',
    demageHP: '100',
    elementHP: document.getElementById('health-enemy'),
    elementProgressBar: document.getElementById('progressbar-enemy'),
    renderHP,
    renderHPLife,
    renderProgressBarHP,
    changeHP
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
    const { elementHP, demageHP, defaultHP } = this;
    elementHP.innerText = demageHP + ' / ' + defaultHP;
}

function renderProgressBarHP() {
    const { elementProgressBar, demageHP } = this;
    elementProgressBar.style.width = demageHP + '%';
}

function changeHP(count) {
    const { name } = this;

    this.demageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    renderLogs(log);

    if (this.demageHP <= count) {
        this.demageHP = 0;
        alert('Покемон ' + name + ' проиграл!')
        btn.disabled = true;
        superBtn.disabled = true;
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

function generateLog(firstPerson, secondPerson, kick) {
    const { name: firstPersonName, demageHP, defaultHP } = firstPerson;
    const { name: secondPersonName } = secondPerson;

    const logs = [
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар -${kick}, [${demageHP}/${defaultHP}].`,
        `${firstPersonName} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} высморкался, но неожиданно ${secondPersonName} провел дробящий удар. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника. -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. -${kick}, [${demageHP}/${defaultHP}]`
    ];

    return logs[random(logs.length - 1)];
}

function renderLogs (log) {
    const elementLogText = document.createElement('li');
    elementLogText.innerText = log;

    elementLogsList.insertBefore(elementLogText, elementLogsList.children[0]);
}

init();