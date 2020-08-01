const electron = require('electron');

const ipc = electron.ipcRenderer;

module.exports = (() => {
  const helloTrigger = document.getElementById('hello')
  const startTimer = _ => {
    ipc.send('start-timer')
    helloTrigger.removeEventListener('click', startTimer)
  }
  helloTrigger.addEventListener('click', startTimer)
})();
