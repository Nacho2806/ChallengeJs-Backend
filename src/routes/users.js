const { Router} = require('express');
const router = Router();

const { loginUser, createUser, getUsers } = require('../controllers/users.controller');

router.get('/', getUsers);

router.post('/signup', createUser);
    
router.post('/signin', loginUser );

module.exports = router;