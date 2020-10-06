function random(num, isSuper) {
    let random = 0;
    if (isSuper) {
        let max = num * 1.5;
        let min = num * 0.5;
        random = min + Math.random() * (max + 1 - min);
    } else {
        random = Math.random() * num;
    }

    return Math.ceil(random);
}

export default random;