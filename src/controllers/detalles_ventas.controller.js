import { pool } from '../../db_connection.js';

// Obtener todas las categorías
export const obtenerDetallesVentas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detalles_ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una categoría por su ID
export const obtenerDetalleVenta = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta
    const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles_venta.'
    });
  }
};

// Registrar una nueva DetalleCompra
export const registrarDetalleVenta = async (req, res) => {
  try {
    const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      'INSERT INTO detalles_ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
      [id_venta, id_producto, cantidad, precio_unitario]
    );
    res.status(201).json({ id_detalle_venta: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el deatalle_venta.',
      error: error
    });
  }
};