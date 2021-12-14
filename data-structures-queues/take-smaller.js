/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  const smaller = Math.min(first, second);
  if (smaller === first) {
    queue.enqueue(second);
  } else {
    queue.enqueue(first);
  }
  return smaller;
}
