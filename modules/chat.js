module.exports = function chat(message) {
  // Example countdown from the tutorial
  let count = 10;
  const countDown = setInterval(_ => {
    count--;
    console.log(`Blias! you've got the ${message} at the count of ${count}`);
    if (count === 0) {
      clearInterval(countDown);
    }
  }, 1000);
}
