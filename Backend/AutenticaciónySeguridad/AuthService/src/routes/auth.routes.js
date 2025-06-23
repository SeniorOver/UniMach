const express = require('express');
const router = express.Router();
const { register, login, validate } = require('../controllers/auth.controller');
const { verifyToken } = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);
router.get('/validate', verifyToken, validate);

module.exports = router;
