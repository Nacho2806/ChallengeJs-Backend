const { Router} = require('express');
const router = Router();

const { getRegisters, createRegister, updateRegister, getRegister, deleteRegister, getTenRegisters} = require('../controllers/registers.controller');

//Se utilizaría para proteger rutas a las que solo tienen acceso los usuarios. No usada en este caso.
const Authenticated = require('../helpers/auth'); 

router.route('/')
    .get(getRegisters)
    .post(createRegister);

router.route('/:id')
    .get(getRegister)
    .delete(deleteRegister)
    .put(updateRegister);

//router.get('/home', getTenRegisters); Error al traer los 10 primeros registros    

module.exports = router;