import { Router } from 'express';
import { eliminarUsuario, obtenerUsuario, obtenerUsuarios, registrarUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', obtenerUsuarios);

// Ruta para orbtener una categoria por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Rutas para registrar un usuario
router.post('/registrarUsuario', registrarUsuario);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);


// Rutas
export default router;