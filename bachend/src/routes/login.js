const express = require('express');
const router = express.Router();


const loginControlleer = require('../controllers/loginControlleer');


router.use('/', loginControlleer.getAll)

module.exports = router