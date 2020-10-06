import Pokemon from './pokemon.js';
import random from './util.js';
import { generateLog, renderLogs } from './log.js';
import { elementBody, elementLogs, elementLogsList, btn, superBtn } from './element.js';
import checkKicks from './check.js';

elementLogs.id = 'logs';
elementBody.appendChild(elementLogs);

elementLogsList.classList.add('logs-list');
elementLogs.appendChild(elementLogsList);

const maxCountKicksBtnKick = 10;
const maxCountKicksBtnSuperKick = 3;

const countKickButtonClick = checkKicks(maxCountKicksBtnKick, btn);
const countSuperKickButtonClick = checkKicks(maxCountKicksBtnSuperKick, superBtn);

const character = new Pokemon({
    name: 'Pikachu',
    defaultHP: 150,
    demageHP: 150,
    selectors: 'character'
})

const enemy = new Pokemon({
    name: 'Charmander',
    defaultHP: 130,
    demageHP: 130,
    selectors: 'enemy'
})

btn.addEventListener('click', function () {
    character.changeHP(random(20), function (count) {
        const log = generateLog(character, enemy, count);
        renderLogs(log);
    });
    enemy.changeHP(random(20), function (count) {
        const log = generateLog(enemy, character, count);
        renderLogs(log);
    });
})

superBtn.addEventListener('click', function () {
    character.changeHP(random(20, true), function (count) {
        const log = generateLog(character, enemy, count);
        renderLogs(log);
    });
    enemy.changeHP(random(20, true), function (count) {
        const log = generateLog(enemy, character, count);
        renderLogs(log);
    });
})

btn.addEventListener('click', countKickButtonClick);
superBtn.addEventListener('click', countSuperKickButtonClick);