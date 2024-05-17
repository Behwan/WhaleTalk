// Phrase you'd like to translate
let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// For loop checks for vowels
for (let i = 0; i < input.length; i++) {
  // log the letter twice if it's 'e' or 'u'
  if (input[i] === 'e' || input[i] === 'u') {
  // pushes vowels into new array
            resultArray.push(input[i]);
           }
  for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]); 
        }
    }
 }
console.log(resultArray);

let resultString = resultArray.join('');
resultString = resultString.toUpperCase();
console.log(resultString);
