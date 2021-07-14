const toRoman = require('../romanNumerals');
const fromRoman = require('../romanNumerals');


describe("From numbers to roman numerals function", () => {

    it('should convert number 1 to I', () => {
        expect(toRoman('1')).toEqual('I');
    });

    it('should convert number 3 to III', () => {
        expect(toRoman('3')).toEqual('III');
    });

    it('should convert number 5 to V', () => {
        expect(toRoman('5')).toEqual('V');
    });

    it('should convert number 4 to IV', () => {
        expect(toRoman('4')).toEqual('IV');
    });

    it('should convert number 6 to VI', () => {
        expect(toRoman('6')).toEqual('VI');
    });

    it('should convert number 8 to VIII', () => {
        expect(toRoman('8')).toEqual('VIII');
    });

    it('should convert number 10 to X', () => {
        expect(toRoman('10')).toEqual('X');
    });

    it('should convert number 9 to IX', () => {
        expect(toRoman('9')).toEqual('IX');
    });

    it('should convert number 13 to XIII', () => {
        expect(toRoman('13')).toEqual('XIII');
    });

});




describe("From roman numerals to numbers function", () => {

    it('should convert roman numeral I to 1', () => {
        expect(fromRoman('I')).toEqual('1');
    });

    it('should convert roman numeral III to 3', () => {
        expect(fromRoman('3')).toEqual('III');
    });

    it('should convert roman numeral V to 5', () => {
        expect(fromRoman('V')).toEqual('5');
    });

    it('should convert roman numeral IV to 4', () => {
        expect(fromRoman('IV')).toEqual('4');
    });

    it('should convert roman numeral VI to 6', () => {
        expect(fromRoman('VI')).toEqual('6');
    });

    it('should convert roman numeral VIII to 8', () => {
        expect(fromRoman('VIII')).toEqual('8');
    });

    it('should convert number 10 to X', () => {
        expect(fromRoman('X')).toEqual('10');
    });

    it('should convert number 9 to IX', () => {
        expect(fromRoman('IX')).toEqual('9');
    });

    it('should convert number 13 to XIII', () => {
        expect(fromRoman('XIII')).toEqual('13');
    });

});