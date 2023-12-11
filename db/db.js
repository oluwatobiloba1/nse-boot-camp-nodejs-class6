import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/test');

const dB = mongoose.connection;

export default dB;