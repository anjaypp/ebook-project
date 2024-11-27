const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Route for Auth0 login (redirects to Auth0 login page)
router.get('/login', authController.login);

// Route for Auth0 logout (logs out the user)
router.get('/logout', authController.logout);

// Route for the Auth0 callback (after successful login)
router.get('/auth0-callback', authController.auth0Callback);

module.exports = router;

