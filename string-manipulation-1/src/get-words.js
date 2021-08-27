/* exported getWords */
function getWords(string) {
  var output = [];
  var currentWord = '';
  if (string === '') {
    return [];
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        output.push(currentWord);
        currentWord = '';
      } else {
        currentWord += string[i];
      }
    }
    output.push(currentWord);
    return output;
  }
}

// input: string
// output: array
// create storage for output
// create storage for currentWord
// if the string is equal to an empty string, return an empty array
// otherwise, look at each character, one at a time
//     if the current character is equal to a space, add the current char to the
//          current word and assign an empty string to current word
// otherwise, if the string is equal to an empty
