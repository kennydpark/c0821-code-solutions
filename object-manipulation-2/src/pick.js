/* exported pick */
function pick(source, keys) {
  var output = {};
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if ((key === keys[i]) && (source[key] !== undefined)) {
        output[key] = source[key];
      }
    }
  }
  return output;
}

// input: source (object), keys (array)
// output: object
// create storage for output, empty object
// look at each key in the source object, assign to variable 'key'
//    look at each item in keys array one at a time
//        if key in source strictly equals value of keys at 'i' AND source object at 'key' strictly NOT equals undefined,
//            add source at 'key' to output object at 'key'
// return output
