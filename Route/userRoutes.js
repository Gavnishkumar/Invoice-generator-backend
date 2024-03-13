const express = require('express');
const { registerUser,authUser } = require('../controller/userControllers');
const router= express.Router();
router.route('/signup').post(registerUser);
router.route('/login').post(authUser);
module.exports=router;
