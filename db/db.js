const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test');

const dB = mongoose.connection;

dB.on('error', console.error.bind(console, 'connection error:'));
dB.once('open', ()=>{
    console.log('connected to database');
})