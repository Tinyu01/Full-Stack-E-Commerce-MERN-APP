const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const userLogoutController = require('../controller/user/userLogout');
const allUsersController = require('../controller/user/allUsers');
const updateUserController = require('../controller/user/updateUser');

// Auth routes
router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user-details', userDetailsController);
router.get('/userlogout', userLogoutController);

// Admin routes
router.get('/all-user', allUsersController);
router.post('/update-user', updateUserController);

module.exports = router;