
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    track: String,
})

const user = mongoose.model('user', userSchema);

export const userModel = ()=>{
    return user;
}
