const Brigadista = require('../models/brigadista.models.js');

exports.getBrigadista = async(req,res) =>{
    try{
        const brigadista = await Brigadista.find();
        res.status(200).json(brigadista);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

exports.createBrigadista = async (req,res) => {
    try{
        const brigadista = new Brigadista({
            nombre: req.body.nombre,
            rut: req.body.rut,
            estado: req.body.estado,
            estado_actual: req.body.estado_actual,
            brigada: req.body.brigada,
        });
        const nuevoBrigadista = await brigadista.save();
        res.status(201).json(nuevoBrigadista);
    } catch (error){
        res.status(400).json({message: error.message});
    }
};

exports.deleteBrigadista = async (req, res) => {
    try {
      const { id } = req.params;
  
     
      const brigadista = await Brigadista.findById(id);
      if (!brigadista) {
        return res.status(404).json({ message: 'Brigadista no encontrado' });
      }
  
      // Eliminar el brigadista
      await brigadista.deleteOne();
  
      res.json({ message: 'Brigadista eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el brigadista' });
    }
  }; 
  
  exports.updateBrigadista = async (req, res) => { 
      try{ 
        const { id } = req.params; 
        const { nombre, rut, estado, brigada } = req.body; 
        const brigadista = await Brigadista.findById(id); 
        if (!brigadista) {
            return res.status(404).json({ message: 'Brigadista no encontrado' });
          } 
        await Brigadista.findByIdAndUpdate(id, { nombre: nombre, rut: rut, estado: estado, brigada: brigada }, { new: true }); 
        const brigadistaResponse={
            nombre:nombre,
            rut:rut,
            estado:estado,
            brigada:brigada
        }; 

        const response = {
          status: 'Exitoso',
          message: 'Datos del brigadista actualizados con exito',
          brigadista: { brigadistaResponse }
        }; 

      res.status(200).json( response );  

      }catch(error){
        res.status(500).json({ message: 'Error al actualizar el brigadista' });
      }


  };

  exports.ActualizarEstadoSaludBrigadista = async (req, res) => { 
    try{   
       const { id } = req.params; 
       const { estado_actual } = req.body; 
       const brigadista = await Brigadista.findById(id); 
       

       if (!brigadista) {
           return res.status(404).json({ message: 'Brigadista no encontrado' });
         }
         
   
       await Brigadista.findByIdAndUpdate(id, { estado_actual: estado_actual }, { new: true });
       const brigadistaResp={ 
        id:brigadista.id,
        nombre:brigadista.nombre,
        rut:brigadista.rut,
        brigada:brigadista.brigada,
        estado_actual:estado_actual 

       };


       const response = {
        status: 'Exitoso',
        message: 'Estado de salud del brigadista actualizado correctamente',
        brigadista: { brigadistaResp }
      }; 

    res.status(200).json( response );
  
    }catch(error){
       res.status(500).json({ message: 'Error al actualizar estado de salud del brigadista' });
    }
   
   };  