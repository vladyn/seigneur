const electron = require('electron');

const ipc = electron.ipcRenderer;

module.exports = (function() {
  document.getElementById('hello').addEventListener('click', _ => ipc.send('start-timer'))
})();
