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