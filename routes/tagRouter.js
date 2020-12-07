const express = require('express')
const router = express.Router()
const { tagList } = require('../controllers/TagController')

//tag create
// router.post('/tags', tagCreate)

//list
router.get('/tags', tagList)

module.exports = router
