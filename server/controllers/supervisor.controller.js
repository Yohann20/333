const Supervisor = require('../models/supervisor.models.js');

exports.getSupervisor = async(req,res) =>{
    try{
        const supervisor = await Supervisor.find();
        res.status(200).json(supervisor);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

exports.createSupervisor = async (req,res) => {
    try{
        const supervisor = new Supervisor({
            nombre: req.body.nombre,
            contraseña: req.body.contraseña,
        });
        const nuevoSupervisor = await supervisor.save();
        res.status(201).json(nuevoSupervisor);
    } catch (error){
        res.status(400).json({message: error.message});
    }
};