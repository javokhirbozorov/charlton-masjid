const router = require('express').Router();
const { signIn, signUp } = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/login', signIn);

module.exports = router;
