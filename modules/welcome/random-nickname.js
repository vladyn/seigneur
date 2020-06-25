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

const randomEmailArray = [
  "lazybanana@gmail.com",
  "thelegend@epicguys.me",
  "tbpte@hotmail.com",
  "toiletobliterator@live.com",
  "blizzardlover@gmail.com",
  "bigbird@yahoo.com",
  "notahalofan@xbox.com",
  "swedishmechanic@mechanicspower.com"
]

function randomize(array) {
  return array.sort(() => Math.random() - 0.5).pop();
}

export const randomNickname = randomize(randomNickArray);

export const randomEmail = randomize(randomEmailArray);

