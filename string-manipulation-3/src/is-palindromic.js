/* exported isPalindromic */
function isPalindromic(string) {
  var noSpaces = '';
  var stringReversed = '';

  for (var n = 0; n < string.length; n++) {
    if (string[n] !== ' ') {
      noSpaces += string[n];
    }
  }

  for (var i = noSpaces.length - 1; i >= 0; i--) {
    stringReversed += noSpaces[i];
  }

  if (stringReversed === noSpaces) {
    return true;
  } else {
    return false;
  }
}

// input string: any string
// output: boolean if string is palindrome
// create storage for the string without spaces called noSpaces
// create storage for the string without spaces reversed called stringReversed
// look at each letter of the string one at a time
//    if the letter strictly not equals a space,
//        add it to noSpaces
// look at each letter of noSpaces one at a time backwards
//    add each letter to stringReversed
// if stringReversed strictly equals noSpaces,
//    return true
//    otherwise,
//        return false
