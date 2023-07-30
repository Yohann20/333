const Supervisor = require('../models/supervisor.models.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { nombre, contraseña } = req.body;

    const supervisor = await Supervisor.findOne({ nombre });
    
    if (!supervisor) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = contraseña === supervisor.contraseña;

    if (!isPasswordValid) {
      console.log("contraseña incorrecta");
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar token JWT
    const token = jwt.sign({ supervisorId: supervisor._id }, 'clave-secreta');

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};