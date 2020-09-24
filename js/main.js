// 1

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getCharALenght(str) {
    let countCharA = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'а') {
            countCharA++;
        }
    }

    return countCharA;
}

function getRow(firstRow, secondRow) {
    let result = 'The both are equal';

    const fisrtCountCharA = getCharALenght(firstRow);
    const secondCountCharA = getCharALenght(secondRow);

    if (fisrtCountCharA > secondCountCharA) {
        result = firstRow;
    } if (fisrtCountCharA < secondCountCharA ) {
        result = secondRow;
    } 

    return result;
}

console.log(getRow(firstRow, secondRow));

// №27

const phone = '+71234567890';

function formattedPhone(phone) {
    let result = '';

    for (let i = 0; i < phone.length; i++) {
        if (phone.charAt(i) === '7' && i === 1) {
            result += '7 ('
        } else if (i === 4) {
            result += phone.charAt(i) + ') ';
        } else if ( i === 7) {
            result += phone.charAt(i) + '-';
        } else if ( i === 9) {
            result += phone.charAt(i) + '-';
        } else {
            result += phone.charAt(i);
        }
    }

    return result;
}

console.log(formattedPhone('+71234567890'))

