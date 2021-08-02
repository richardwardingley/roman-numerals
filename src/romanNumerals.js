const toRoman = (number) => {

    let unitsNumeralsArr = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    let tensNumeralsArr = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let hundredsNumeralsArr = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    let thousandsNumeralsArr = ['M','MM','MMM'];

    if (number === 0) {
        return "Nulla";
    }

    let strDigits = number.toString().split(''); //.reverse()
    let numDigits = strDigits.map(Number);

    let unitsNumber = numDigits[(numDigits.length)-1];
    let tensNumber = numDigits[(numDigits.length)-2];
    let hundredsNumber = numDigits[(numDigits.length)-3];
    let thousandsNumber = numDigits[(numDigits.length)-4];

    let thousandsNumeral = thousandsNumeralsArr[thousandsNumber-1];
    let hundredsNumeral = hundredsNumeralsArr[hundredsNumber-1];
    let tensNumeral = tensNumeralsArr[tensNumber-1];
    let unitsNumeral = unitsNumeralsArr[unitsNumber-1];

    let convertedNumeralArr = [];
    convertedNumeralArr.push(thousandsNumeral);
    convertedNumeralArr.push(hundredsNumeral);
    convertedNumeralArr.push(tensNumeral);
    convertedNumeralArr.push(unitsNumeral);

    let filteredNumeralArr = convertedNumeralArr.filter(function(x) {
        return x !== undefined;
    });

    let finalTranslation = filteredNumeralArr.join('');
    console.log(number, ' = ' ,finalTranslation);
    return finalTranslation;
}



const fromRoman = (romanNumeral) => {

    const numberMap = {
        M:1000, D:500, C:100, L:50, X:10, V:5, I:1
    };

    romanNumeral = romanNumeral.toUpperCase().split('').reverse();
        let numsAdded = 0;
        for (let i = 0; i < romanNumeral.length; i++) {
            if (numberMap[romanNumeral[i]] < numberMap[romanNumeral[i-1]]) {
                numsAdded -= numberMap[romanNumeral[i]];
            } else {
                numsAdded += numberMap[romanNumeral[i]];
            }
        }
        console.log(numsAdded);
        return numsAdded;
}

toRoman(3999);
fromRoman('MMMCDXLVIII');


module.exports = {toRoman, fromRoman};

// for (let i=1; i < 4000; i++) {
//     toRoman(i);
// }