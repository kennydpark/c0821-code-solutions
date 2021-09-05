/* exported capitalizeWord */
function capitalizeWord(word) {
  var lower = '';
  var output = '';
  lower += word.toLowerCase();
  if (lower === 'javascript') {
    return 'JavaScript';
  } else {
    output += lower[0].toUpperCase();

    for (var i = 1; i < lower.length; i++) {
      output += lower[i].toLowerCase();
    }
  }
  return output;
}

// input: word(string)
// output: string
// create storage for lowercase string, which is an empty string
// create storage for output, which is an empty string
// convert 'word' to lowercase, then add it to storage for lowercase
// if 'lower' strictly equals 'javascript',
//    return 'JavaScript'
//    otherwise,
//    change the first char of word to uppercase, add it to output, and assign it to output
//    look at each char of 'lower' starting at the 2nd one
//        change the value of 'lower' at current i to lowercase, add it to output, and assign it to output
// return output
