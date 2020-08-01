const CIPHER_KEY = 'frontend';
const min = 32;
const max = 125;

function getKeyAsAsciiSum(key: string): number {
  let result = 0;
  for (const char of key) result += char.charCodeAt(0);
  return result;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function encryptCipher(input: string, key: string): string {
  let output = '';
  const keyAsciiSumMod = getKeyAsAsciiSum(key) % (max - min + 1);
  for (const char of input) output += shiftUp(char, keyAsciiSumMod);

  return output;
}

export function decryptCipher(input: string, key: string = CIPHER_KEY): string {
  let output = '';
  const keyAsciiSumMod = getKeyAsAsciiSum(key) % (max - min + 1);
  for (const char of input) output += shiftDown(char, keyAsciiSumMod);

  return output;
}

function shiftUp(char: string, keyAsciiSumMod: number): string {
  const charCode = char.charCodeAt(0);
  const newCharCode = charCode + keyAsciiSumMod;

  if (newCharCode > max) {
    return String.fromCharCode(newCharCode - max + (min - 1));
  } else {
    return String.fromCharCode(newCharCode);
  }
}

function shiftDown(char: string, keyAsciiSumMod: number): string {
  const charCode = char.charCodeAt(0);
  const newCharCode = charCode - keyAsciiSumMod;

  if (newCharCode < min) {
    return String.fromCharCode(newCharCode + max - (min - 1));
  } else {
    return String.fromCharCode(newCharCode);
  }
}

// console.log(encrypt('titanic', 'frontend'));
// console.log(decrypt('({(s"{u', 'frontend'));
