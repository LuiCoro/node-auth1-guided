const router = require('express').Router();

// |~| STEP |~| TWO |~|
// [ |~| CREATING |~| ]
// - A -> function that validates if the user is auth or not
const validatePayLoad = (req, res, next) => {
  next()
}


router.post('/register', validatePayLoad, async (req, res, next) => {
  try {
    const { username, password } = req.body
    // [ |~| DO |~| NOT |~| REMOVE |~| COMMENT |~| ]
    // do this to check if the stuff you need is actually passing through
    // console.log(username, password)
    res.json({username, password})
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