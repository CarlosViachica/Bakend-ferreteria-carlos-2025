import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);

// Ruta para orbtener una categoria por su ID
router.get('/categoria/:id_categoria', obtenerCategoria);

// Rutas para registrar una categoria
router.post('/registrarCategoria', registrarCategoria);

// Rutas
export default router;