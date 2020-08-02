const CIPHER_KEY = 'frontend';
const min = 32;
const max = 125;

function getKeyAsAsciiSum(key: string): number {
  let result = 0;
  for (const char of key) result += char.charCodeAt(0);
  return result;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const encryptCipher = (input: string, key = CIPHER_KEY): string =>
  commonAlgorithm(input, key, shiftUp);

export const decryptCipher = (input: string, key = CIPHER_KEY): string =>
  commonAlgorithm(input, key, shiftDown);

function commonAlgorithm(
  input: string,
  key: string,
  operation: (char: string, keySum: number) => string
): string {
  const keyAsciiSumMod = getKeyAsAsciiSum(key) % (max - min + 1);
  // splits string into `key.length` chunks
  const regex = new RegExp(`.{1,${key.length}}`, 'g');
  const chunks: string[] = input.match(regex);
  let decryptedChunks: string[] = [];

  for (const chunk of chunks) {
    const chunkReversed = reverseChunk(chunk);
    let decryptedChunk = '';
    for (const char of chunkReversed) decryptedChunk += operation(char, keyAsciiSumMod);
    decryptedChunk = reverseChunk(decryptedChunk);
    decryptedChunks = [...decryptedChunks, decryptedChunk];
  }
  return decryptedChunks.join('');
}

const reverseChunk = (chunk: string): string => chunk.split('').reverse().join('');

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

// console.log(encryptCipher('titanic', 'frontend'));
// console.log(decryptCipher('({(s"{u', 'frontend'));
