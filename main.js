let input = 'h3!!  oOO';

const charCount = (input) => {
    const justLetters = input.toLowerCase().replace(/[^a-z]/g, '');

    const theCount = {};

    for (let letter of justLetters) {
        if (theCount[letter]) {
            theCount[letter]++;
        } else {
            theCount[letter] = 1;
        }
    }

    return theCount;
}

console.log(input)

console.log(charCount(input));