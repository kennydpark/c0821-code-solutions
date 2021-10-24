/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var firstStringNoSpace = '';
  var secondStringNoSpace = '';

  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringNoSpace += firstString[i];
    }
  }
  for (var n = 0; n < secondString.length; n++) {
    if (secondString[n] !== ' ') {
      secondStringNoSpace += secondString[n];
    }
  }
  var firstStringArray = firstStringNoSpace.split('');
  var secondStringArray = secondStringNoSpace.split('');

  var firstStringSorted = firstStringArray.sort();
  var secondStringSorted = secondStringArray.sort();

  var firstToString = firstStringSorted.join();
  var secondToString = secondStringSorted.join();

  if (firstToString === secondToString) {
    return true;
  } else {
    return false;
  }
}

// input: 2 strings, first and second
// output: boolean, true if they are anagrams, false if not
// create storage for firstString without spaces called firstSTringNoSpace
// create storage for secondString without spaces called secondStringNoSpace
// loop through firstString's letters
//    if the letter strictly not equals a space,
//        add it to firstStringNoSpace
// loop through secondString's letters
//    if the letter strictly not equals a space,
//        add it to secondStringNoSpace
// turn firstStringNoSpace into an array and assign it to variable firstStringArray
// turn secondStringNoSpace into an array and assign it to variable secondStringArray
// sort firstStringArray in alphabetical order and assign it to firstStringSorted
// sort secondStringArray in alphabetical order and assign it to secondStringSorted
// turn firstStringSorted back into a string and assign it to firstToString
// turn secondStringSorted back into a string and assign it to secondToString
// if firstToString strictly equals secondToString,
//    return true;
//    otherwise,
//        return false;
