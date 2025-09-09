import { Router } from 'express';
import { obtenerUsuario, obtenerUsuarios, registrarUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', obtenerUsuarios);

// Ruta para orbtener una categoria por su ID
router.get('/usuario/:id_usuario', obtenerUsuario);

// Rutas para registrar un usuario
router.post('/registrarUsuario', registrarUsuario);

// Rutas
export default router;