import random from './util.js';
import { elementLogsList } from './element.js';

export function generateLog(firstPerson, secondPerson, kick) {
    const { name: firstPersonName, demageHP, defaultHP } = firstPerson;
    const { name: secondPersonName } = secondPerson;
    
    const logs = [
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар \n -${kick}, [${demageHP}/${defaultHP}].`,
        `${firstPersonName} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} высморкался, но неожиданно ${secondPersonName} провел дробящий удар. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника. \n -${kick}, [${demageHP}/${defaultHP}]`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. \n -${kick}, [${demageHP}/${defaultHP}]`
    ];

    return logs[random(logs.length - 1)];
}

export function renderLogs (log) {
    const elementLogText = document.createElement('li');
    elementLogText.innerText = log;

    elementLogsList.insertBefore(elementLogText, elementLogsList.children[0]);
}