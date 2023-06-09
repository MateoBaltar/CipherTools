export function decodeCaesarCipher(ciphertext, shift, bruteForce = false) {
  if (bruteForce) {
    const results = [];
    for (let i = 0; i < 26; i++) {
      results.push(decodeCaesarCipher(ciphertext, i));
    }
    return results;
  }
  let plaintext = "";
  for (let i = 0; i < ciphertext.length; i++) {
    const charCode = ciphertext.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      plaintext += String.fromCharCode(
        ((charCode - 65 - shift + 26) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      plaintext += String.fromCharCode(
        ((charCode - 97 - shift + 26) % 26) + 97
      );
    } else {
      plaintext += ciphertext[i];
    }
  }
  return plaintext;
}

export function caesarEncode(str, shift) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // uppercase letters
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase letters
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      // not a letter, leave unchanged
      result += str.charAt(i);
    }
  }
  return result;
}

export default {decodeCaesarCipher, caesarEncode};

