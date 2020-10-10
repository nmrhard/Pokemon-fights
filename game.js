import { elementBody, elementLogs, elementLogsList, elementControl } from './element.js';
import Pokemon from './pokemon.js';
import { random, checkKicks, randomPokemon } from './util.js';
import { generateLog, renderLogs } from './log.js';

class Game {
    renderLogList = () => {
        elementBody.appendChild(elementLogs);
        elementLogs.appendChild(elementLogsList);
    }

    createPokemon = (pokemon, selector) => {
        const newPokemon = new Pokemon ({
            ...pokemon,
            selectors: selector
        })
    
        return newPokemon;
    }

    rednerKickButtons = (character, enemy) => {
        character.attacks.forEach(item => {
            const btn = document.createElement('button');
            btn.innerText = item.name;
            btn.classList.add('button');
            const countKicks = checkKicks(item.maxCount, btn);
        
            btn.addEventListener('click', () => {
                this.doEnemyFirstKick(character, enemy);
                enemy.changeHP(random(item.maxDamage, item.minDamage), (count) => {
                    const log = generateLog(enemy, character, count);
                    renderLogs(log);
                });
                countKicks();
            })
        
            elementControl.appendChild(btn);
        });
    }

    removeButtons = (className) => {
        const buttons = document.querySelectorAll(className);
        buttons.forEach( item => {
            item.style.display = 'none';
        });
    }

    startGame = () => {
        const firstPokemon = randomPokemon();
        const secondPokemon = randomPokemon();

        if (firstPokemon && secondPokemon) {
            let character = this.createPokemon(firstPokemon,'character');
            let enemy = this.createPokemon(secondPokemon,'enemy');
    
            this.removeButtons('button');
            this.rednerKickButtons(character, enemy);
            this.renderLogList();
        } else {
            this.removeButtons('button');
            var elementText = document.createElement('p');
            elementText.classList.add('warning');
            elementText.innerHTML = 'No more pokemons';
            elementControl.appendChild(elementText);
            
        }
    }

    doEnemyFirstKick = (character, enemy) => {
        const firstKick = enemy.attacks[0]; 
        character.changeHP(random(firstKick.maxDamage, firstKick.minDamage), (count) => {
            const log = generateLog(character, enemy, count);
            renderLogs(log);
        });
    }
}

export default Game;