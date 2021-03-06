/* exported titleCase */
function titleCase(title) {
  var words = title.toLowerCase().split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'on', 'per', 'to', 'of'];
  for (var i = 0; i < words.length; i++) {
    if (words[i] === 'javascript') {
      words[i] = 'JavaScript';
    } else if (words[i] === 'javascript:') {
      words[i] = 'JavaScript:';
    } else if (words[i] === 'api') {
      words[i] = 'API';
    } else if (/[-]/.test(words[i]) === true) {
      var separated = words[i].split('-');
      words[i] = separated[0][0].toUpperCase() + separated[0].substr(1) + '-' + separated[1][0].toUpperCase() + separated[1].substr(1);
    }
    if ((minor.indexOf(words[i]) === -1)) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    for (var x = 0; x < words.length; x++) {
      words[0] = words[0][0].toUpperCase() + words[0].substr(1);
      if (words[x] === 'JavaScript:') {
        words[x + 1] = words[x + 1][0].toUpperCase() + words[x + 1].substr(1);
      } else if (words[x] === 'Programmer:') {
        words[x + 1] = words[x + 1][0].toUpperCase() + words[x + 1].substr(1);
      }
    }
  }
  var output = words.join(' ');
  return output;
}

// input - 'title', a JavaScript String representing a book title
// output - original 'title', but with APA Title Case Style applied
// convert the string into an array, where each element is a word. Assign result to 'words' variable
// create an array of all the minor words
// loop through the words array
//    if the current word equals 'javascript', 'javascript:', 'api',
//        change the current word to the correct case style
//    if the current word contains a hyphen,
//        convert the word into an array, separated by the hyphen - into 2 words
//        concatenate the first word's first letter uppercased, rest of the letters of the first word, a hyphen, the second word's first letter uppercased, and the rest of the letters of the second word / then assign result of expression to the current word
//    if the current word does not equal a minor word,
//        capitalize the first letter and combine with the rest of the letters, then assign the result to the current word
//    loop through the new words array
//        convert the first word's first letter to upper case
//        if the current word equals 'JavaScript:',
//            change the next word to the correct case style
//        otherwise, if the word equals 'Programmer:',
//            change the next word to the correct case style
// convert the array of words into a string, assign to 'output'
// return 'output'
