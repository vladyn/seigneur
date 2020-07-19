const electron = require('electron');

const ipc = electron.ipcRenderer;

const documentState =  document.addEventListener('onreadystatechange', _ => {
  return document.readyState;
})

module.exports = (function(state) {
  document.getElementById('hello').addEventListener('click', _ => {
    ipc.send('start-timer');
    console.log(documentState);
  })
})(documentState)
