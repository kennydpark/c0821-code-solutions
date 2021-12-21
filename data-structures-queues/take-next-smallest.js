/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let value = queue.dequeue();
  while (value > queue.peek()) {
    queue.enqueue(value);
    value = queue.dequeue();
  }
  return value;
}
