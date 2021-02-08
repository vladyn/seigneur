const electron = require('electron')
const io = require('socket.io')

const ipc = electron.ipcRenderer;

const serverURL = 'http://localhost:3011'

function socketInit(url) {
  const socket = io(url)

  socket.on('connect', () => {
    console.log('user is connected')
  })

  socket.on('message', data => {
    const { text } = data
    console.log(`Message with content ${text} received`)
  })

  socket.on('disconnect', data => {
    const { text: byeMessage } = data
    console.log(`User left with bye message ${byeMessage}`)
  })

  socket.on('start-typing', _ => {
    console.log('user is typing')
  })

  socket.on('stop-typing', _ => {
    console.log('user is idle')
  })
}

module.exports = (() => {
  socketInit(serverURL)
  const helloTrigger = document.getElementById('hello')
  const connedctTrigger = document.querySelector('#connect')
  const startTimer = _ => {
    ipc.send('start-timer')
    helloTrigger.removeEventListener('click', startTimer)
  }
  helloTrigger.addEventListener('click', startTimer)
  connedctTrigger.addEventListener('click', () => {
    ipc.send('start-typing')
  })

  ipc.send('ch1', data => console.log(data))
  ipc.send('ch1', 'vlad')
})();
