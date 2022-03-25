/* 
    Rute: /post
*/

const {Router} = require ('express');
const{getUsuarios, crearUsuario, actualizarUsuario} = require('../controllers/usuarios')

const router = Router();

router.get("/", getUsuarios);

router.post("/", crearUsuario);

router.put("/:id", actualizarUsuario)

module.exports = router;
