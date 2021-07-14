const toRoman = (number) => {

    let unitsNumerals = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    let tensNumerals = ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    let hundredsNumerals = ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    let thousandsNumerals = ['M','MM','MMM'];

    let numeralTranslation = unitsNumerals[number-1];
    
    console.log(`${number} = ${numeralTranslation}`);
    return numeralTranslation;
}

toRoman(0);

module.exports = toRoman;