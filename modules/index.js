const remote = require('electron').remote;
const { randomNickArray, randomPassArray} = require('../lib/randomData');
const randomize = require('../helpers/randomizer');

const password = document.getElementById('showPassword');
const identifyForm = document.getElementById('identify');
const passwordSwitch = document.getElementById('passSwitch');
const randomPass = randomize(randomPassArray);
const nick = document.getElementById('nick');
const randomNick = randomize(randomNickArray);
const passVisibility = document.getElementById("showPassword");

password.setAttribute('placeholder', randomPass);

nick.setAttribute('placeholder', randomNick);
passwordSwitch.addEventListener('change', passwordShow);
identifyForm.addEventListener('submit', identifyMe);

function passwordShow() {
  if (passVisibility.type === "password") {
    passVisibility.type = "text";
  } else {
    passVisibility.type = "password";
  }
}

function identifyMe() {
  const BrowserWindow = remote.BrowserWindow;

  const win = new BrowserWindow({
    width: 840,
    height: 490,
    frame: true,
    resizable: true,
    webPreferences:
      {
        devTools: true,
        nodeIntegration: true
      }
  });
  win.loadFile('./chat.html').then(() => {
    win.webContents.openDevTools()
  });
  window.close();
}

