
import express from 'express';
import {validate} from '../middleware/validate.js';
import {createUser, updatedUser, findUsers, findUserById, deleteUser} from '../controller/user.controller.js';

const router = express.Router();


router.get('/users',findUsers)
router.get('/users/:id',findUserById)

router.post('/users', createUser)
router.put('/users/:id', updatedUser)

router.delete('/users/:id', deleteUser)

export default router;