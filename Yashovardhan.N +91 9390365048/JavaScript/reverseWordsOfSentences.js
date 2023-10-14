class reverseWords {
    constructor() {
        let sentence = prompt("Enter a sentence: ");
        let words = sentence.split(" ");
        sentence="";

        for(let i=0; i<words.length; i++) {
            sentence+=words[i].split("").reverse().join("")+" ";
        }
        
        console.log(sentence);
    }
}

new reverseWords();