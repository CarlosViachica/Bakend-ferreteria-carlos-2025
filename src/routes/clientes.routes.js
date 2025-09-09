import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', obtenerClientes);

// Ruta para orbtener una categoria por su ID
router.get('/cliente/:id_cliente', obtenerCliente);

// Rutas para registrar una categoria
router.post('/registrarCliente', registrarCliente);

// Rutas
export default router;