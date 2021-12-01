const router = require('express').Router();

router.post('/register', async (req, res, next) => {
  res.json('register wired!')
})

router.post('/login', async (req, res, next) => {
  res.json('login wired!')

})

router.get('/logout', async (req, res, next) => {
  res.json('logout wired!')

})


module.exports = router