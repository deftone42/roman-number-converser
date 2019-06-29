import { romanToArabicNumber } from './utils';

it('#romanToArabicNumber should parse', () => {
  expect(romanToArabicNumber('')).toBe( null);
  expect(romanToArabicNumber('X')).toBe( 10);
  expect(romanToArabicNumber('XX')).toBe( 20);
  expect(romanToArabicNumber('LVIII')).toBe( 58);
  expect(romanToArabicNumber('IX')).toBe( 9);
  expect(romanToArabicNumber('MMMCMXCIX')).toBe( 3999);
  expect(romanToArabicNumber('lviii')).toBe( 58); // lowercase should work
  expect(romanToArabicNumber('XXXXXXXX')).toBe( null); // no more than 3 consecutives X
  expect(romanToArabicNumber(null as any)).toBe( null); // preventing hacking
  expect(romanToArabicNumber('LVHIII')).toBe( null); // Invalid roman number, return null
});
