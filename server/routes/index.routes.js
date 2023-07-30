const express = require('express');

const authController = require('../controllers/auth.controller.js');
const supervisorRoutes = require('./supervisor.routes.js');
const brigadistaRoutes = require('./brigadista.routes.js');
const medicionesRoutes = require('./mediciones.routes.js');


const router = express.Router();

router.use('/supervisor', supervisorRoutes);
router.use('/brigadista', brigadistaRoutes);
router.use('/mediciones',medicionesRoutes);
router.post('/auth/login', authController.login);

module.exports = router;