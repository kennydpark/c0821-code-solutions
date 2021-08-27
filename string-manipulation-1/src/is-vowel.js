/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}

// input: string (single char)
// output: boolean
// create storage for vowels in an array
// look at each item in array one at a time
// if the input char is equal to an item in the array, return true
// otherwise, return false
