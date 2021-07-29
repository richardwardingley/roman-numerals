const toRoman = require('../romanNumerals');
const fromRoman = require('../romanNumerals');


describe("From numbers to roman numerals function", () => {

    it('should return Nulla if number = 0', () => {
        expect(toRoman(0)).toEqual('Nulla');
    });

    it('should convert number 1 to I', () => {
        expect(toRoman(1)).toEqual('I');
    });

    it('should convert number 3 to III', () => {
        expect(toRoman(3)).toEqual('III');
    });

    it('should convert number 5 to V', () => {
        expect(toRoman(5)).toEqual('V');
    });

    it('should convert number 4 to IV', () => {
        expect(toRoman(4)).toEqual('IV');
    });

    it('should convert number 6 to VI', () => {
        expect(toRoman(6)).toEqual('VI');
    });

    it('should convert number 8 to VIII', () => {
        expect(toRoman(8)).toEqual('VIII');
    });

    it('should convert number 10 to X', () => {
        expect(toRoman(10)).toEqual('X');
    });

    it('should convert number 9 to IX', () => {
        expect(toRoman(9)).toEqual('IX');
    });

    it('should convert number 13 to XIII', () => {
        expect(toRoman(13)).toEqual('XIII');
    });

    it('should convert number 19 to IXX', () => {
        expect(toRoman(19)).toEqual('XIX');
    });

    it('should convert tens column correctly', () => {
        expect(toRoman('20')).toEqual('XX');
        expect(toRoman('40')).toEqual('XL');
        expect(toRoman('50')).toEqual('L');
        expect(toRoman('80')).toEqual('LXXX');
        expect(toRoman('90')).toEqual('XC');
    });

    it('should convert different 2 digit numbers', () => {
        expect(toRoman('27')).toEqual('XXVII');
        expect(toRoman('49')).toEqual('XLIX');
        expect(toRoman('61')).toEqual('LXI');
        expect(toRoman('74')).toEqual('LXXIV');
        expect(toRoman('93')).toEqual('XCIII');
    });

    it('should convert hundreds column correctly', () => {
        expect(toRoman('100')).toEqual('C');
        expect(toRoman('400')).toEqual('CD');
        expect(toRoman('500')).toEqual('D');
        expect(toRoman('700')).toEqual('DCC');
        expect(toRoman('900')).toEqual('CM');
    });

    it('should convert different 3 digit numbers', () => {
        expect(toRoman('327')).toEqual('CCCXXVII');
        expect(toRoman('450')).toEqual('CDL');
        expect(toRoman('681')).toEqual('DCLXXXI');
        expect(toRoman('734')).toEqual('DCCXXXIV');
        expect(toRoman('888')).toEqual('DCCCLXXXVIII');
    });

    it('should convert thousands column correctly', () => {
        expect(toRoman('1000')).toEqual('M');
        expect(toRoman('2000')).toEqual('MM');
        expect(toRoman('3000')).toEqual('MMM');
    });

    it('should convert different 4 digit numbers', () => {
        expect(toRoman('1234')).toEqual('MCCXXXIV');
        expect(toRoman('2050')).toEqual('MML');
        expect(toRoman('2985')).toEqual('MMCMLXXXV');
    });

});




describe("From roman numerals to numbers function", () => {

    it('should convert single character roman numerals to numbers', () => {
        expect(fromRoman('I')).toEqual(1);
        expect(fromRoman('V')).toEqual(5);
        expect(fromRoman('X')).toEqual(10);
        expect(fromRoman('L')).toEqual(50);
        expect(fromRoman('C')).toEqual(100);
        expect(fromRoman('D')).toEqual(500);
        expect(fromRoman('M')).toEqual(1000);
    });

    it('should convert multiple roman numerals of the same character to numbers', () => {
        expect(fromRoman('III')).toEqual(3);
        expect(fromRoman('XX')).toEqual(20);
        expect(fromRoman('CCC')).toEqual(300);
    });

    it('should convert roman numerals with a smaller roman numerals following a larger one to numbers', () => {
        expect(fromRoman('VI')).toEqual(6);
        expect(fromRoman('VIII')).toEqual(8);
        expect(fromRoman('XIII')).toEqual(13);
        expect(fromRoman('XVII')).toEqual(17);
        expect(fromRoman('CLXVI')).toEqual(166);
    });

    it('should convert roman numerals with a smaller roman numeral before the larger one to numbers', () => {
        expect(fromRoman('IV')).toEqual(4);
        expect(fromRoman('IX')).toEqual(9);
        expect(fromRoman('XL')).toEqual(40);
        expect(fromRoman('XC')).toEqual(90);
    });


});