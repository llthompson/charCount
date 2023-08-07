let input = 'The quick brown fox jumps over 18 lazy dogs.';

const charCount = (input) => {
    const justLetters = input.toLowerCase().replace(/[^a-z]/g, '');

    console.log('Just the letters: ', justLetters)

    const nowSort = justLetters.split('').sort().join('');

    console.log('Sort them: ', nowSort);

    const theCount = {};

    for (let letter of nowSort) {
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