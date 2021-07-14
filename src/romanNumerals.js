const toRoman = (number) => {

    let unitNumerals = ['I','II','III','IV','V','VI','VII','VIII','IX'];
    let tensNumerals = [];

    let numeralTranslation = unitNumerals[number-1];
    
    console.log(`${number} = ${numeralTranslation}`);
    return numeralTranslation;
}

toRoman(2);

module.exports = toRoman;