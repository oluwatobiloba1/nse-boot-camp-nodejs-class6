
const express = require('express');
// import {validate} from '../middleware/validate.js';
const  userController  = require('../controller/userController.js');
const {findUsers, findUserById, createUser, updateUser, deleteUser} = userController;
const router = express.Router();


router.get('/users',findUsers)
router.get('/users/:id',findUserById)

router.post('/users', createUser)
router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router;