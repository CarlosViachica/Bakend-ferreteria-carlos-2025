import { Router } from 'express';
import { eliminarVenta, obtenerVenta, obtenerVentas, registrarVenta } from '../controllers/ventas.controller.js';

const router = Router();

router.get('/ventas', obtenerVentas);

// Ruta para orbtener una categoria por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Rutas para registrar una venta
router.post('/registrarVenta', registrarVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Rutas
export default router;