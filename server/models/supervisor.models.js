const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    contraseña:{
        type: String,
        required: true,
    },

});

const Supervisor = mongoose.model('supervisor', supervisorSchema);

module.exports = Supervisor;