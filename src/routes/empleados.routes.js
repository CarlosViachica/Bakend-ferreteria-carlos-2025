import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, registrarEmpleado, eliminarEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

router.get('/empleados', obtenerEmpleados);

// Ruta para orbtener una categoria por su ID
router.get('/empleado/:id_empleado', obtenerEmpleado);

// Rutas para registrar un empleado
router.post('/registrarEmpleado', registrarEmpleado);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);


// Rutas
export default router;