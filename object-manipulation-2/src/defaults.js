/* exported defaults */
function defaults(target, source) {

  for (var sourceKey in source) {

    var sourceValue = source[sourceKey];
    if (target[sourceKey] === undefined) {
      target[sourceKey] = sourceValue;
    }
  }
}

// input: target (object), source (object)
// output: nothing. only 'target' will be modified
// look at each key property of 'source' one at a time
//    create storage for value of 'source' at key property
//    if 'target' at key property strictly equals undefined,
//        add 'target' at key property with value of 'source' at key property to 'target' object
