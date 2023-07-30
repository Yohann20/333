const express = require('express');

const brigadistaController = require ('../controllers/brigadista.controller.js');

const router = express.Router();

router.get('/', brigadistaController.getBrigadista);
router.post('/',brigadistaController.createBrigadista);
router.delete('/:id', brigadistaController.deleteBrigadista); 
router.put('/:id', brigadistaController.updateBrigadista);  

//actualizar estado de salud actual del brigadista 
router.put('/actualizar/:id', brigadistaController.ActualizarEstadoSaludBrigadista);


module.exports = router;