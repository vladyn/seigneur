module.exports = function randomize(array) {
  return array.sort(() => Math.random() - 0.5).pop();
}
