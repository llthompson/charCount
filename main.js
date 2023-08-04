let input = 'h3!!o';

const charCount = (input) => {
    // let count = 0;

    const justLetters = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()1234567890]/g,'');
    // input.for (let i = 0; i < input.length; i++) {
    //     if (input.charAt(i) === letter) {
    //         count += 1;
    //     }
        
    // }
    
    
    return justLetters;
}

console.log(input)

console.log(charCount(input));