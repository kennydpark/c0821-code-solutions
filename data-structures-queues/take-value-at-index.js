/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  while (queue.peek() !== undefined && index) {
    queue.enqueue(queue.dequeue());
    index--;
  }
  return queue.dequeue();
}
