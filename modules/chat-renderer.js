const electron = require('electron')
const io = require('socket.io')()

const ipc = electron.ipcRenderer;

module.exports = (() => {
  const helloTrigger = document.getElementById('hello')
  const startTimer = _ => {
    ipc.send('start-timer')
    io.emit('message', { username: 'vlad', text: 'Blias' })
    helloTrigger.removeEventListener('click', startTimer)
  }
  helloTrigger.addEventListener('click', startTimer)
})();
