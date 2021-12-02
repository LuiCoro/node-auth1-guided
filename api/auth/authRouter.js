const router = require('express').Router();

// STEP 3 PART IV
// importing bcrypt
const bcrypt = require('bcryptjs')

// STEP 3 PART I
// INSTALL -> npm i bcryptjs <-
// STEP 3 PART II
// we gotta ahead into the model to make it do something when we add a new user
const {add} = require('../users/users-model')


// |~| STEP |~| TWO |~|
// [ |~| CREATING |~| ]
// - A -> function that validates if the user is auth or not
const validatePayLoad = (req, res, next) => {
  next()
}


router.post('/register', validatePayLoad, async (req, res, next) => {
  try {
    const {username, password} = req.body

    // [ |~| DO |~| NOT |~| REMOVE |~| COMMENT |~| ]
    // do this to check if the stuff you need is actually passing through
    // console.log(username, password)
    // res.json({username, password})

    //  STEP 4
    //  Creating a hash
    const hash = bcrypt.hashSync(password, 8) // 2 ^ 8
    //  lets console.log to see what we are dealing with
    // this is what we got as our hash -> ( $2a$08$DEkmVXOTxVLN1hxPzxVPguXg8RstFrqEsVYR.xAahyNKalmxU0gP2 )
    // console.log(hash)
    // res.json(hash)

    // STEP 5
    // adding our new user along with a hashed password
    const user = {username, password: hash}
    const createdUser = await add(user)
    // this sends back our NEW user with our hash as the password to protect it
    // {
    //   id: 2,
    //       username: 'Omi',
    //     password: '$2a$08$Yd775g1fRrYNZTBZT8.5R.jalWbFpRKB4uzVuD2aheLK9BIuoYs5W'
    // }
    // YOU ARE ABLE TO CHECK VIA SQLITE

    console.log(createdUser)
    res.status(201).json(createdUser)

  } catch (err) {
    next(err)
  }
})

router.post('/login', validatePayLoad, async (req, res, next) => {
  res.json('login wired!')

})

router.get('/logout', async (req, res, next) => {
  res.json('logout wired!')

})


module.exports = router