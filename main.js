import Game from './game.js';
import { elementStartButtom, elementControl } from './element.js';

elementStartButtom.addEventListener('click', () => {
    const game = new Game();
    game.startGame();
})

elementControl.appendChild(elementStartButtom);