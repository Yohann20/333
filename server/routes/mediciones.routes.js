const express = require('express');

const medicionesController = require ('../controllers/mediciones.controller.js');


const router = express.Router();

router.get('/', medicionesController.getMediciones);
router.post('/', medicionesController.createMediciones);
router.delete('/:id', medicionesController.deleteMediciones);
router.get('/rutina/:rut', medicionesController.calcularIMCRutina);
router.get('/dieta/:rut', medicionesController.calcularIMCDieta); 
router.put('/:id', medicionesController.actualizarMediciones); 



module.exports = router;