const Mediciones = require('../models/mediciones.models.js');


exports.getMediciones = async(req,res) =>{
    try{
        const mediciones = await Mediciones.find();
        res.status(200).json(mediciones);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

exports.createMediciones = async (req,res) => {
    try{
        const mediciones = new Mediciones({
            rut: req.body.rut,
            peso: req.body.peso,
            altura: req.body.altura,
        });
        const nuevoMediciones = await mediciones.save();
        res.status(201).json(nuevoMediciones);
    } catch (error){
        res.status(400).json({message: error.message});
    }
};

exports.deleteMediciones = async (req, res) => {
    try {
      const { id } = req.params;
  
  
      const medicion = await Mediciones.findById(id);
  
      if (!medicion) {
        return res.status(404).json({ message: 'Medición no encontrada' });
      }
  
      await medicion.deleteOne();
  
      res.json({ message: 'Medición eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la medición' });
    }
}; 

exports.actualizarMediciones = async (req, res) => {  
  try{
  const { id } = req.params; 
  const { peso, altura } = req.body; 
  const medicion = await Mediciones.findById(id); 
  
  if (!medicion) {
    return res.status(404).json({ message: 'Medición no encontrada' });
  } 
  await Mediciones.findByIdAndUpdate(id, { peso: peso, altura: altura }, { new: true }); 
  
  const MedicionesResponse={ 
      id:id,
      peso:peso,
      altura:altura
  }; 

const response = {
  status: 'Exitoso',
  message: 'Datos de mediciones actualizados con exito',
  brigadista: { MedicionesResponse }
};

  res.status(200).json( response ); 

  }catch (error) {
    res.status(500).json({ message: 'Error al actualizar la medición' });
  }


};



  exports.calcularIMCRutina = async (req, res) => {
    try {
      const { rut } = req.params;
      const mediciones = await Mediciones.findOne({ rut });
  
      if (!mediciones) {
        return res.status(404).json({ message: 'Medición no encontrada' });
      }

      
  
      const imc = mediciones.peso / ((mediciones.altura / 100) ** 2);

      //ultima modificacion.falta agregar para mostrar y pasarselo a los brigadista
      let rutinaRecomendada;
      if (imc < 18.5) {
        rutinaRecomendada = 'Rutina de aumento de peso';
      } else if (imc < 24.9) {
        rutinaRecomendada = 'Rutina de mantenimiento';
      } else if (imc < 29.9) {
        rutinaRecomendada = 'Rutina de pérdida de peso leve';
      } else {
        rutinaRecomendada = 'Rutina de pérdida de peso intensa';
      }

      res.status(200).json({ rutinaRecomendada });
    } catch (error) {
      res.status(500).json({ message: 'Error al calcular el IMC' });
    }
  };
    exports.calcularIMCDieta = async (req, res) => {
      try {
        const { rut } = req.params;
        const mediciones = await Mediciones.findOne({ rut });
    
        if (!mediciones) {
          return res.status(404).json({ message: 'Medición no encontrada' });
        }
  
        
    
        const imc = mediciones.peso / ((mediciones.altura / 100) ** 2);
  
        //ultima modificacion.falta agregar para mostrar y pasarselo a los brigadista
        let dietaRecomendada;
        if (imc < 18.5) {
          dietaRecomendada = 'Dieta para aumentar peso';
        } else if (imc < 24.9) {
          dietaRecomendada = 'Dieta para mantener peso';
        } else if (imc < 29.9) {
          dietaRecomendada = 'Dieta para bajar de peso';
        } else {
        dietaRecomendada = 'Dieta para bajar de peso intensa';
        }
  
        res.status(200).json({dietaRecomendada });
      } catch (error) {
        res.status(500).json({ message: 'Error al calcular el IMC' });
      };
    



  };