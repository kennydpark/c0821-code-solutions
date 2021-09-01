/* exported capitalizeWord */
// function capitalizeWord(word) {
//   var output = '';
//   output += word[0].toUpperCase();

//   if ((word === 'jaVAsCrIPt') || (word === 'javaScript') || (word === 'JavascRipt')) {
//     return 'JavaScript';
//   } else {
//     for (var i = 1; i < word.length; i++) {
//       output += word[i].toLowerCase();
//     }
//   }
//   return output;
// }

// input: word(string)
// output: string
// create storage for output, which is an empty string
// change the first char of word to uppercase, add it to output, and assign it to output
// if word is stricty equal to 'jaVAsCrIPt', or 'javaScript', or 'JavascRipt',
//    return 'JavaScript'
// otherwise,
//    look at each char of word starting at the 2nd one
//        change the value of word at current i to lowercase, add it to output, and assign it to output
// return output

function capitalizeWord(word) {
  var output = '';
  word.toLowerCase();
  if (word === 'javascript') {
    return 'JavaScript';
  } else {
    output += word[0].toUpperCase();

    for (var i = 1; i < word.length; i++) {
      output += word[i].toLowerCase();
    }
  }
  return output;
}
