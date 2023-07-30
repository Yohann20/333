const mongoose = require('mongoose');

const medicionesSchema = new mongoose.Schema({


    rut:{
        type: String,
        require: true,
    },
    peso:{
        type: Number,
        require: true,

    },
    altura:{
        type: Number,
        require: true,
    },

});

const Mediciones = mongoose.model('Mediciones', medicionesSchema);
module.exports = Mediciones;