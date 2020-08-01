const server = require('./lib/server').server

const port = process.env.PORT || 3011

server.run(port);

setInterval(() => {
  server.simulateConnect('vlad');
}, 1000)
