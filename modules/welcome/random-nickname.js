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
  return array.sort(() => Math.random() - 0.5).pop();
}

export const randomNickname = randomize(randomNickArray);

