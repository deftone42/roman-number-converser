export function romanToArabicNumber(romanNumber: string): number|null {
  if (!_isValidRomanNumber(romanNumber)) {
    return null;
  }
  let prev: number = 0, current;

  const arabicNumber: number = romanNumber.toUpperCase().split('').reduce((sum: number, rNum: string) => {
    current = RomanNumber[rNum]; // Parsing individual roman number to number
    if (current <= prev){
      sum += current;
    } else {
      sum = sum - prev * 2 + current;
    }
    prev = current;
    return sum;
  }, 0);

  return isNaN(arabicNumber) ? null : arabicNumber;
}

function _isValidRomanNumber(romanNumber: string): boolean {
  if (!romanNumber || !romanNumber.length) return false;
  return !/IIII|XXXX|CCCC|MMMM]/.test(romanNumber);
}

export const RomanNumber: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
