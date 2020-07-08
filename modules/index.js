const { randomNickArray, randomPassArray} = require('../lib/randomData');
const randomize = require('../helpers/randomizer');

const password = document.getElementById('showPassword');
const passwordSwitch = document.getElementById('passSwitch');
const randomPass = randomize(randomPassArray);
const nick = document.getElementById('nick');
const randomNick = randomize(randomNickArray);
const passVisibility = document.getElementById("showPassword");

password.setAttribute('placeholder', randomPass);

nick.setAttribute('placeholder', randomNick);
passwordSwitch.addEventListener('change', passwordShow);

function passwordShow() {
  if (passVisibility.type === "password") {
    passVisibility.type = "text";
  } else {
    passVisibility.type = "password";
  }
}

