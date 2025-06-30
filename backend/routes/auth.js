const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const userLogoutController = require('../controller/user/userLogout');
const allUsersController = require('../controller/user/allUsers');
const updateUserController = require('../controller/user/updateUser');
// Cart controllers
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');

// Auth routes
router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user-details', userDetailsController);
router.get('/userlogout', userLogoutController);

// Admin routes
router.get('/all-user', allUsersController);
router.post('/update-user', updateUserController);

// Cart routes
router.post('/add-to-cart', addToCartController);
router.get('/cart/count', countAddToCartProduct);
router.get('/cart/view', addToCartViewProduct);
router.post('/cart/update', updateAddToCartProduct);
router.post('/cart/delete', deleteAddToCartProduct);

module.exports = router;