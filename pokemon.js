
import { btn, superBtn } from './element.js';

class Selector {
    constructor(name) {
        this.elementHP = document.getElementById(`health-${name}`);
        this.elementProgressBar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selector {
    constructor({ name, defaultHP, demageHP, selectors}) {
        super(selectors);

        this.name = name,
        this.defaultHP = defaultHP,
        this.demageHP = demageHP

        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.demageHP -= count;
    
        if (this.demageHP <= count) {
            this.demageHP = 0;
            alert('Покемон ' + this.name + ' проиграл!');
            btn.disabled = true;
            superBtn.disabled = true;
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