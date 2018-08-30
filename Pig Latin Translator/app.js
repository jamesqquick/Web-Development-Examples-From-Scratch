const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const vowels = ['a','i','o','u','e'];
const ending = 'ay';
textInput.addEventListener('keyup', (e) => {
    const input = e.target.value;
    const output = input.split(' ').map( word => {
        //if first letter is vowel then return with 'ay' ending
        if(vowels.includes(word[0])){
            return word + ending;
        }
        //iterate through characters of word until we find a vowel
        let consonantsPrefix = '';
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if(vowels.includes(char)){
                break;
            }
            consonantsPrefix += char;
            
        }
        return word.substring(consonantsPrefix.length) + consonantsPrefix + ending;
        //Iterate through characters of wor
    }).join(' ');
    textOutput.innerText = output;
});