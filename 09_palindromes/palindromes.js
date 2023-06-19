const palindromes = function (string) {
    const re = new RegExp("\\W", "g");
    let checkPalindromes = string.replace(re, "").toLowerCase();
    let length = checkPalindromes.length;
    let midPoint = Math.floor(length / 2);
    console.log(string, checkPalindromes, length, midPoint);
    for (let i = 0; i < midPoint; i++) {
        if (checkPalindromes[i]!== checkPalindromes[length - i - 1]) {
            return false;
        }
    }
    return true;
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// Do not edit below this line
module.exports = palindromes;
