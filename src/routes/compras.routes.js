import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra } from '../controllers/compras.controller.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Ruta para orbtener una categoria por su ID
router.get('/compra/:id_compra', obtenerCompra);

// Rutas para registrar una categoria
router.post('/registrarCompra', registrarCompra);

// Rutas
export default router;