const router = require('express').Router();
const { login, signUp, checkAdmin } = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/login', login);
router.get('/checkAdmin', checkAdmin);

module.exports = router;
