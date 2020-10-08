import Pokemon from './pokemon.js';
import { random, checkKicks } from './util.js';
import { generateLog, renderLogs } from './log.js';
import { elementBody, elementLogs, elementLogsList, elementControl } from './element.js';
import { pokemons } from './pokemons.js';

elementLogs.id = 'logs';
elementBody.appendChild(elementLogs);

elementLogsList.classList.add('logs-list');
elementLogs.appendChild(elementLogsList);

// const maxCountKicksBtnKick = 10;
// const maxCountKicksBtnSuperKick = 3;

// const countKickButtonClick = checkKicks(maxCountKicksBtnKick, btn);
// const countSuperKickButtonClick = checkKicks(maxCountKicksBtnSuperKick, superBtn);

const pikachu = pokemons.find(item => item.name === 'Pikachu');
const charmander = pokemons.find(item => item.name === 'Charmander');

const character = new Pokemon({
    ...pikachu,
    selectors: 'character'
})

const enemy = new Pokemon({
    ...character,
    selectors: 'enemy'
})

character.attacks.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.name;
    btn.classList.add('button');
    const countKicks = checkKicks(item.maxCount, btn);

    btn.addEventListener('click', () => {
        character.changeHP(random(item.maxDamage, item.minDamage), (count) => {
            const log = generateLog(character, enemy, count);
            renderLogs(log);
        });
        countKicks();
    })
    elementControl.appendChild(btn);
});


// btn.addEventListener('click', function () {
//     character.changeHP(random(20), function (count) {
//         const log = generateLog(character, enemy, count);
//         renderLogs(log);
//     });
//     enemy.changeHP(random(20), function (count) {
//         const log = generateLog(enemy, character, count);
//         renderLogs(log);
//     });
// })

// superBtn.addEventListener('click', function () {
//     character.changeHP(random(20, true), function (count) {
//         const log = generateLog(character, enemy, count);
//         renderLogs(log);
//     });
//     enemy.changeHP(random(20, true), function (count) {
//         const log = generateLog(enemy, character, count);
//         renderLogs(log);
//     });
// })

// btn.addEventListener('click', countKickButtonClick);
// superBtn.addEventListener('click', countSuperKickButtonClick);