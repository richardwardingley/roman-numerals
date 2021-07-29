const toRoman = (number) => {

    let unitsNumeralsArr = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    let tensNumeralsArr = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let hundredsNumeralsArr = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    let thousandsNumeralsArr = ['M','MM','MMM'];

    if (number === 0) {
        console.log('0 = Nulla');
        //let nulla = "Nulla";
        return "Nulla";
    }

    let strDigits = number.toString().split(''); //.reverse()
    let numDigits = strDigits.map(Number);
    console.log(numDigits , 'numDigits');

    let unitsNumber = numDigits[(numDigits.length)-1];
    let tensNumber = numDigits[(numDigits.length)-2];
    let hundredsNumber = numDigits[(numDigits.length)-3];
    let thousandsNumber = numDigits[(numDigits.length)-4];
    console.log(thousandsNumber, 'thousandsNumber')
    console.log(hundredsNumber , 'hundredsNumber');
    console.log(tensNumber , 'tensNumber');
    console.log(unitsNumber , 'unitNumber');

    let thousandsNumeral = thousandsNumeralsArr[thousandsNumber-1];
    let hundredsNumeral = hundredsNumeralsArr[hundredsNumber-1];
    let tensNumeral = tensNumeralsArr[tensNumber-1];
    let unitsNumeral = unitsNumeralsArr[unitsNumber-1];
    console.log(thousandsNumeral, 'thousandsNumeral');
    console.log(hundredsNumeral, 'hundredsNumeral');
    console.log(tensNumeral, 'tensNumeral');
    console.log(unitsNumeral, 'unitsNumeral');
    //+ hundredsNumeralsArr[hundredsNumber-1] + tensNumeralsArr[tensNumber-1] + unitsNumeralsArr[unitNumber-1]];
    //let convertedNumeral = thousandsNumeralsArr[thousandsNumber-1] + hundredsNumeralsArr[hundredsNumber-1] + tensNumeralsArr[tensNumber-1] + unitsNumeralsArr[unitNumber-1];

    let convertedNumeralArr = [];
    convertedNumeralArr.push(thousandsNumeral);
    convertedNumeralArr.push(hundredsNumeral);
    convertedNumeralArr.push(tensNumeral);
    convertedNumeralArr.push(unitsNumeral);
    console.log(convertedNumeralArr);

    let filteredNumeralArr = convertedNumeralArr.filter(function(x) {
        return x !== undefined;
    });
    console.log(filteredNumeralArr);
    // for (let numerals = 0; numerals < convertedNumeralArr.length-1; numerals++){
    //     if (numerals == undefined) {
    //         convertedNumeralArr.slice(0);
    //     }
    // }
    // console.log(convertedNumeralArr);

    //console.log(convertedNumeral , 'convertedNumeral');
    // let numeralsArray = [];
    // console.log(numeralsArray);
    let finalTranslation = filteredNumeralArr.join('');
    console.log(number, ' = ' ,finalTranslation);
    return finalTranslation;
}



const fromRoman = (romanNumeral) => {

}

//toRoman(320);
fromRoman(XIV);

module.exports = toRoman;
module.exports = fromRoman;