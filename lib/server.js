const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

const users = new Set()

io.on('connection', socket => {
  let username;

  socket.on('message', data => {
    const { text } = data
    io.sockets.emit('message', { username, text })
    console.log('message emitted')
  })

  socket.on('start-typing', () => {
    socket.broadcast.emit('start-typing', { username })
  })

  socket.on('stop-typing', () => {
    socket.broadcast.emit('stop-typing', { username })
  })

  socket.on('connect', data => {
    ({ username } = data)
    users.add(username)
    io.sockets.emit('connect', { username, users: Array.from(users) })
    console.log(`username ${username} connected with ${data}`)
  })

  socket.on('disconnect', data => {
    users.delete(username)
    socket.broadcast.emit('leave', { username, users: Array.from(users) })
  })
})

exports.server = {
  run(port) {
    server.listen(port, () => {
      console.log(`server is listeninng on ${port}`)
    })
  },
  simulateConnect(username) {
    io.sockets.emit('connect', { username })
  }
}
