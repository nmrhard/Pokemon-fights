import { pokemons } from './pokemons.js';

export function random(max, min = 0) {
    const num = max - min;
    return Math.ceil(Math.random() * num) + min;
}

export function checkKicks(maxCountKicks, element) {
    const btnText = element.innerText;
    element.innerText = `${btnText} (${maxCountKicks})`
    return function () {
        maxCountKicks -= 1;
        element.innerText = `${btnText} (${maxCountKicks})`;
        if (maxCountKicks === 0) {
            element.disabled = true;
        }
    }
}

export function randomPokemon () {
    const randomPokemon = pokemons.splice(random(0, pokemons.length-1), 1);
    return randomPokemon.shift();
}