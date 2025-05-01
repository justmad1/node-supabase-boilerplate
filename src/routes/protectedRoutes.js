const express = require('express');
const router = express.Router();
const authenticateJWT = require('../auth/jwtMiddleware');
const { getProfile } = require('../controllers/userController');

router.get('/profile', authenticateJWT, getProfile);

module.exports = router;