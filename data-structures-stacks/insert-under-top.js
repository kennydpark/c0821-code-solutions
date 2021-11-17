/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let restore;
  if ((stack.peek()) || (stack.peek() === null)) {
    restore = stack.pop();
    stack.push(value);
    stack.push(restore);
  }
}
