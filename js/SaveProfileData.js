const key = 'M67we6gIa1xIqHCmj5PZGs8YaWPNcIkQ'
let temp = `{"name": "Alex", "age": 129, "exp": 1992192, "inventory": {"1": "Sword"}}`

const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}
    
const decipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
      .map(hex => parseInt(hex, 16))
      .map(applySaltToChar)
      .map(charCode => String.fromCharCode(charCode))
      .join('');
}

const myCipher = cipher(key)
encrtyped = myCipher(temp)
console.log(encrtyped)

const myDecipher = decipher(key)
decrypted = myDecipher(encrtyped)
console.log(JSON.parse(decrypted))
