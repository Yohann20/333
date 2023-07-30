const express = require('express');

const supervisorController = require ('../controllers/supervisor.controller.js');
const authController = require('../controllers/auth.controller.js');

const router = express.Router();

router.get('/', supervisorController.getSupervisor);
router.post('/', supervisorController.createSupervisor);


router.post('/login', authController.login);

module.exports = router;