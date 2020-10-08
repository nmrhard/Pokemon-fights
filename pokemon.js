class Selector {
    constructor(name) {
        this.elementHP = document.getElementById(`health-${name}`);
        this.elementProgressBar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selector {
    constructor({ name, hp, selectors, attacks}) {
        super(selectors);

        this.name = name,
        this.defaultHP = hp,
        this.demageHP = hp,
        this.attacks = attacks

        this.renderHP();
    }

    changeHP = (count, cb) => { 
        const minPokemonHP = 0;   
        this.demageHP -= count;

        if (this.demageHP <= minPokemonHP) {
            this.demageHP = minPokemonHP;
            alert('Покемон ' + this.name + ' проиграл!');

            const allKickButtons = document.querySelectorAll('.control .button');
            allKickButtons.forEach( item => {
                item.disabled = true;
            });
        }
    
        this.renderHP();
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressBarHP();
    }
    
    renderHPLife = () => {
        const { elementHP, demageHP, defaultHP } = this;
        elementHP.innerText = demageHP + ' / ' + defaultHP;
    }
    
    renderProgressBarHP = () => {
        const { elementProgressBar, demageHP, defaultHP } = this;
        const percent = demageHP / (defaultHP / 100);
        elementProgressBar.style.width = percent + '%';
    }
} 

export default Pokemon;