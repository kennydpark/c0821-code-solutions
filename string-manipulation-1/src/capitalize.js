/* exported capitalize */
function capitalize(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      output += word[i];
    } else {
      output += word[i].toLowerCase();
    }
  }
  return output;
}

// output: string
// input: string
// create storage output
// get first char and capitalize it
// add it to output and assign result to output
// look at each char starting at second one, one at a time
//    if char is lowercase, add to output
//    otherwise, change char to lowercase and add to output
// return output
