
const userModel  = require('../schema/userSchema');

 const createUser = async (req,res)=>{
    const data = req.body;
    const user = await userModel.create({
           ...data
        });

    return res.status(201).json({
        message: 'created user successfuly',
        statusCode: 201,
        data: user,
    })
}

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const data = req.body;

    const user = await userModel.findById(id);

    if(!user) return res.status(404).json({
        message: 'user not found',
        statusCode: 404,
    })

    const updatedUser = await userModel.updateOne({id},{...data},{returnOriginal:false});

    return res.status(200).json({
        message: 'updated user successfuly',
        statusCode: 200,
        data: updatedUser,
    })

}

const findUsers = async (req,res)=>{
    const users = await user.find();
     return res.status(200).json({
        message: 'users found',
        statusCode: 200,
        data: users,});
}

const findUserById = async (req,res)=>{
    const id = req.params.id;
    const user = await userModel.findById(id);

    if(!user) return res.status(404).json({
        message: 'user not found',
        statusCode: 404,
    })

    return res.status(200).json({
        message: 'user found',
        statusCode: 200,
        data: user,
    });
}

const deleteUser = async (req,res)=>{
    const id = req.params.id;

    const user = await userModel.deleteOne({id});
}

module.exports = {
    createUser,
    updateUser,
    findUsers,
    findUserById,
    deleteUser,
}
// const newUser = new user({
//     name: 'John Doe',
//     age: 25,
//     track: 'Node.js',
// })

// newUser.save();

// user.create({
//     name: 'Jane Doe',
//     age: 22,
//     track: 'python',
// });

// const findOneUser =async ()=>{
//     const oneUser = await user.findOne({name: 'John Doe'});
    
//     console.log(oneUser);
// }
// const findUserId =async ()=>{
//     const oneUser = await user.findById('657206e3af5b97f56c3b8d7a').exec().then((data)=>{
//         console.log(data);
//     })
//     console.log(oneUser);
// }

// findOneUser();
// const findUser = async ()=>{
//     const users = await user.find();
//     console.log(users);
// }
// findUser();

//update doc

// user.updateOne({name: 'John Doe'}, {name: 'jack', age:30, track: 'frontend'}, {returnOriginal: false})
// user.findByIdAndUpdate('657206e3af5b97f56c3b8d7a', {name: 'jack', age:30, track: 'frontend'}, {returnOriginal: false})

// user.aggregate([    
//    { $group:{
//         _id: '$age',
//         count: {$sum: 1}
//     }}
// ]).exec().then(data=>{
//     console.log(data);
// })
// user.aggregate().groupBy({
//     _id: '$age'
// })

//delete user
// user.deleteOne({name: 'jack'});