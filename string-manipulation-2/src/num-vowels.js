/* exported numVowels */
function numVowels(string) {
  var output = 0;
  for (var i = 0; i < string.length; i++) {
    if ((string[i] === 'a') || (string[i] === 'e') || (string[i] === 'i') || (string[i] === 'o') || (string[i] === 'u') || (string[i] === 'A') || (string[i] === 'E') || (string[i] === 'I') || (string[i] === 'O') || (string[i] === 'U')) {
      output++;
    }
  }
  return output;
}

// input: string
// output: string
// create storage for output: 0
// look at each char one at a time
// if value of string at i strictly equals 'a' or 'e' or 'i' or 'o' or 'u' or 'A' or 'E' or 'I' or 'O' or 'U',
//    increment output by 1
// return output
