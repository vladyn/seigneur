const randomNickArray = [
  "LazyBanana97",
  "TheLegend",
  "TheBestPersonToExist",
  "ToiletDestroyer123",
  "BlizzardLover7455",
  "BigBird016",
  "NotAHaloFan9",
  "TheBestMechanicInSweden"
]

function randomize(array) {
  return randomNickArray.sort(() => Math.random() - 0.5).pop();
}

exports.randomNickname = randomize(randomNickArray);

