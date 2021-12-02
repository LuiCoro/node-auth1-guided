const path = require('path')
const express = require('express')
const helmet = require('helmet')

// STEP 7 PART I
const session = require('express-session')

const usersRouter = require('./users/users-router.js')
const authRouter = require('./auth/authRouter')

const server = express()

server.use(express.static(path.join(__dirname, '../client')))
server.use(helmet())
server.use(express.json())
// STEP 7 PART II
server.use(session({
//  lots of 'em
  name: 'monkey', // the name of the sessionId
  secret: 'make it long and random', // the sessionID is actually encrypted
  cookie: {
    //this an expiration date/lifespan of the cookie
    maxAge: 1000 * 60 * 60,
    secure: false, // in [ PRODUCTION ] it should be true (if ture, only over HTTPS)
    httpOnly: false, // in [ PRODUCTION ] it should be true if possible (if true, the [JAVASCRIPT] cannot read te cookie )
  },
  rolling:true, // everytime the user refreshes the page the exp. timer resets on the cookie
  resave: false, //ignore for now
  saveUninitialized: false, // if false, sessions are not stored "by default"


}))
server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

server.use('*', (req, res, next) => {
  next({ status: 404, message: 'not found!' })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = server
