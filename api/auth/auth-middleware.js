function restricted(req, res, next) {
  console.log('restricted access to authed users only!!')
  next()
}


module.exports = {
  restricted
}