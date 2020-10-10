export const elementBody = document.querySelector('.body');

export const elementLogs = document.createElement('div');
elementLogs.id = 'logs';

export const elementLogsList = document.createElement('ul');
elementLogsList.classList.add('logs-list');


export const elementControl = document.querySelector('.control');

export const elementStartButtom = document.createElement('button');
elementStartButtom.classList.add('button', 'button-start');
elementStartButtom.innerText = "Start Game";

export const elementResetButtom = document.createElement('button');
elementResetButtom.innerText = 'Reset Game';
elementResetButtom.classList.add('button');
elementResetButtom.style.display = 'none';

elementResetButtom.addEventListener('click', () => {
    elementResetButtom.style.display = 'none';
    elementStartButtom.style.display = 'inline-block';
    elementLogsList.innerHTML = '';
    elementLogs.remove();
})