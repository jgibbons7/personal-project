const express = require('express')
const socketIo = require('socket.io')
const http = require('http')

const port = 5000
const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', (socket) => {
  console.log('New connection!')

  socket.on('disconnect', () => {
    console.log('User Left')
  })
})

app.use(router)

server.listen(port, () => console.log(`server has started on ${port}`))

