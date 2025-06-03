const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser
} = require('../controllers/userController');

// User routes
router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser);

module.exports = router;
