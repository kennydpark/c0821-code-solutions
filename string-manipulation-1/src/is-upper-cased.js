/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// input: string
// output: boolean
// look at each character one at a time
// if char is equal to the char lowercased, return false
// otherwise, return true
