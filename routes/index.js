const express = require('express')
const router = express.Router()

router.get('/api/hello-world', function (req, res, next) {
  res.json({ message: 'hello world from express' })
})

module.exports = router
