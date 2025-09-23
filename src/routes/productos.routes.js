import { Router } from 'express';
import { eliminarProducto, obtenerProducto, obtenerProductos, registrarProducto } from '../controllers/productos.controller.js';

const router = Router();

router.get('/productos', obtenerProductos);

// Ruta para orbtener una categoria por su ID
router.get('/producto/:id_producto', obtenerProducto);

// Rutas para registrar un producto
router.post('/registrarProducto', registrarProducto);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);


// Rutas
export default router;