var express = require('express');
var router = express.Router();

router.get('/api/hello-world', function (req, res, next) {
  res.json({ message: 'hello world from express' })
});

module.exports = router;
