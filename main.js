import Pokemon from './pokemon.js';
import { random, checkKicks, randomPokemon } from './util.js';
import { generateLog, renderLogs } from './log.js';
import { elementBody, elementLogs, elementLogsList, elementControl } from './element.js';

elementLogs.id = 'logs';
elementBody.appendChild(elementLogs);

elementLogsList.classList.add('logs-list');
elementLogs.appendChild(elementLogsList);

const firstPokemon = randomPokemon();
const secondPokemon = randomPokemon();

const characterPokemonName = document.querySelector('#name-character');
const characterPokemonImage = document.querySelector('.character .sprite');
characterPokemonName.innerText = firstPokemon.name;
characterPokemonImage.src = firstPokemon.img;

const enemyPokemonName = document.querySelector('#name-enemy');
const enemyPokemonImage = document.querySelector('.enemy .sprite');
enemyPokemonName.innerText = secondPokemon.name;
enemyPokemonImage.src = secondPokemon.img;

const character = new Pokemon({
    ...firstPokemon,
    selectors: 'character'
})

const enemy = new Pokemon({
    ...secondPokemon,
    selectors: 'enemy'
})

function doEnemyFirstKick() {
    const firstKick = enemy.attacks[0]; 
    console.log(firstKick);
    character.changeHP(random(firstKick.maxDamage, firstKick.minDamage), (count) => {
        const log = generateLog(character, enemy, count);
        renderLogs(log);
    });
}

character.attacks.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.name;
    btn.classList.add('button');
    const countKicks = checkKicks(item.maxCount, btn);

    btn.addEventListener('click', () => {
        doEnemyFirstKick();
        enemy.changeHP(random(item.maxDamage, item.minDamage), (count) => {
            const log = generateLog(enemy, character, count);
            renderLogs(log);
        });
        countKicks();
    })

    elementControl.appendChild(btn);
});