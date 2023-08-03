const palindromes = function (str) {
    console.log(str);
    const punctuation = ['!','@','#','$','%','^','&','*','(',')','_','/','?','.',' ',','];
    for(const punct of punctuation) {
        str = String(str).toLowerCase().replaceAll(punct,'');
    }
    console.log(str);

    let isPalindrome = true;
    for(let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length-1-i])
            isPalindrome = false;
    }
    console.log(isPalindrome);
    return isPalindrome;

};

// Do not edit below this line
module.exports = palindromes;
