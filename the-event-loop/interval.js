let count = 3;

function decrement() {
  console.log(count--);
  if (count < 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}
const intervalID = setInterval(decrement, 1000);
