// function restricted(req, res, next) {
//   console.log('restricted access to authed users only!!')
//   next()
// }

// STEP 8
function restricted(req, res, next) {
  if(req.session.user) {
    next()
  } else {
    next({
      status: 401, message: 'BAD CREDENTIALS'
    })
  }
}

module.exports = {
  restricted
}