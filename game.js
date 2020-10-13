import { elementBody, elementLogs, elementLogsList, elementControl } from './element.js';
import Pokemon from './pokemon.js';
import { random, checkKicks } from './util.js';
import { generateLog, renderLogs } from './log.js';
import Backend from './backend.js';

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

    getPokemonsDamage = async (characterId, enemyId, damageId) => {
        const backend = new Backend();
        const damage = await backend.getDamage(characterId, enemyId, damageId);
        return damage.kick;
    }

    rednerKickButtons = (character, enemy) => {
        character.attacks.forEach(async (item) => {
            const btn = document.createElement('button');
            btn.innerText = item.name;
            btn.classList.add('button');
            const countKicks = checkKicks(item.maxCount, btn);

            const damage = await this.getPokemonsDamage(character.id, enemy.id, item.id);
            const characterDamage = damage.player1;
            const enemyDamage = damage.player2;
        
            btn.addEventListener('click', () => {
                character.changeHP(enemyDamage, (enemyDamage) => {
                    const log = generateLog(character, enemy, enemyDamage);
                    renderLogs(log);
                });
                enemy.changeHP(characterDamage, (characterDamage) => {
                    const log = generateLog(enemy, character, characterDamage);
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

    startGame = async () => {
        const backend = new Backend();
        const firstPokemon = await backend.getRandomPokemon();
        const secondPokemon =  await backend.getRandomPokemon();

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