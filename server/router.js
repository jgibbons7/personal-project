const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('SERVER UP')
})

module.exports = router