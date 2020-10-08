function checkKicks(maxCountKicks, element) {
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

export default checkKicks;