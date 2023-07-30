const mongoose = require('mongoose');

const brigadistaSchema = new mongoose.Schema({

    nombre:{
        type: String,
        require: true, 
    },
    rut:{
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    estado_actual:{
        type: String,
        requiere: true,
    },
    brigada:{
        type: String,
        require: true, 
    },

});

const Brigadista = mongoose.model('brigadista',brigadistaSchema);
module.exports = Brigadista;