import { elementControl, elementResetButtom, elementLogs } from './element.js'

class Selector {
    constructor(name) {
        this.elementHP = document.getElementById(`health-${name}`);
        this.elementProgressBar = document.getElementById(`progressbar-${name}`);
        this.elementName = document.querySelector(`#name-${name}`);
        this.elementImage = document.querySelector(`.${name} .sprite`);
    }
}

class Pokemon extends Selector {
    constructor({ img, name, hp, selectors, attacks}) {
        super(selectors);

        this.name = name,
        this.defaultHP = hp,
        this.demageHP = hp,
        this.attacks = attacks,
        this.img = img

        this.renderPokemon();
    }

    changeHP = (count, cb) => { 
        const minPokemonHP = 0;   
        this.demageHP -= count;

        if (this.demageHP <= minPokemonHP) {
            this.demageHP = minPokemonHP;
            alert('Покемон ' + this.name + ' проиграл!');

            const allKickButtons = document.querySelectorAll('.control .button:not(.button-start)');
            allKickButtons.forEach( item => {
                item.remove();
            });

            this.renderResetButton();
        }
    
        this.renderPokemon();
        cb && cb(count);
    }

    renderPokemon = () => {
        this.renderHPLife();
        this.renderProgressBarHP();
        this.renderName();
        this.renderImage();
    }
    
    renderHPLife = () => {
        const { elementHP, demageHP, defaultHP } = this;
        elementHP.innerText = demageHP + ' / ' + defaultHP;
    }

    renderName = () => {
        this.elementName.innerText = this.name;
    }

    renderImage = () => {
        this.elementImage.src = this.img;
    }
    
    renderProgressBarHP = () => {
        const { elementProgressBar, demageHP, defaultHP } = this;
        const percent = demageHP / (defaultHP / 100);
        elementProgressBar.style.width = percent + '%';
    }

    renderResetButton = () => {
        elementResetButtom.style.display = 'inline-block';
        elementControl.insertBefore(elementResetButtom, elementControl.children[0]);
    }
} 

export default Pokemon;