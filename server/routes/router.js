const express = require('express');
const { test } = require('../controllers/test');
const { signUp, signin } = require('../controllers/userController');

const router = express.Router();

//test
router.get('/test', test);

            //user routes
//user signup
router.post('/api/auth/signup', signUp)

//signin
router.post('/api/auth/signin', signin)




module.exports = router;