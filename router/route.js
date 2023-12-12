
const express = require('express');
const { checkSchema, body, validationResult } = require('express-validator');
const  userController  = require('../controller/userController.js');
const {findUsers, findUserById, createUser, updateUser, deleteUser} = userController;
const router = express.Router();
const schema = require('../validation/schema/joiUserSchema.js');

router.get('/users',findUsers)
router.get('/users/:id',findUserById)

router.post('/users',
    (req,res,next)=>{
        const user = req.body;
         
        const {error: vError} = schema.validate({...user});

        if(vError){
            // return res.status(400).json({
            //     message: 'bad user input',
            //     statusCode: 400,
            //     error: errorbody,
            // })
            return res.status(400).send(vError)
        }
        return next();
        // try {
        // }
        // catch (err) { 


            
        //     const errorbody = {}
        //     console.log('validation error ',err);
        //     err.details.forEach((e)=>{
        //         errorbody[e.context.key] = e.message;
        //     })

           
        // }
    },
 createUser
 );
router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router;