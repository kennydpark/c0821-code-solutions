/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if ((typeof word[i] === 'string') && (word[i] !== word[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

// input: string
// output: boolean
// look at each char, one at a time
// if data type of char is a string, AND char is not lowercase, return false
// otherwise, return true
