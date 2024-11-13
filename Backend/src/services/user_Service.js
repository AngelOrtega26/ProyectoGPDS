const { pool } = require('../config/db');  // Importar el pool de db.js

//----------------------------------------------------------------------
// CRUD USUARIOS
//----------------------------------------------------------------------
//----------------------------------------------------------------------
// C - CREATE
//----------------------------------------------------------------------
// MÉTODO PARA CREAR UN USUARIO
const createUser = async (userData) => {
    try {
        const { nombre, apellido, correo, contrasena } = userData;
        const result = await pool.query(
            'INSERT INTO usuarios (nombre, apellido, correo, contrasena) VALUES ($1, $2, $3, $4) RETURNING *',
            [nombre, apellido, correo, contrasena]
        );
        return result.rows[0];  // Devuelve el nuevo usuario creado
    } catch (error) {
        throw new Error('Error al crear el usuario: ' + error.message);
    }
};
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// R - READ
//----------------------------------------------------------------------
// MÉTODO PARA OBTENER TODOS LOS USUARIOS
const getAllUsers = async () => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        return result.rows;  // Devuelve todos los usuarios
    } catch (error) {
        throw new Error('Error al obtener los usuarios: ' + error.message);
    }
};
//----------------------------------------------------------------------
// MÉTODO PARA OBTENER UN SOLO USUARIO MEDIANTE SU ID
const getUserById = async (userId) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id_usuario = $1', [userId]);
        return result.rows[0];  // Devuelve el usuario encontrado
    } catch (error) {
        throw new Error('Error al obtener el usuario: ' + error.message);
    }
};
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// U - UPDATE
//----------------------------------------------------------------------
// MÉTODO PARA ACTUALIZAR UN USUARIO
const updateUser = async (userId, userData) => {
    try {
        const { nombre, apellido, correo, contrasena } = userData;
        const result = await pool.query(
            'UPDATE usuarios SET nombre = $1, apellido = $2, correo = $3, contrasena = $4 WHERE id_usuario = $5 RETURNING *',
            [nombre, apellido, correo, contrasena, userId]
        );
        return result.rows[0];  // Devuelve el usuario actualizado
    } catch (error) {
        throw new Error('Error al actualizar el usuario: ' + error.message);
    }
};

//----------------------------------------------------------------------
// D - DELETE
//----------------------------------------------------------------------
// MÉTODO PARA ELIMINAR UN USUARIO
const deleteUser = async (userId) => {
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id_usuario = $1 RETURNING *', [userId]);
        return result.rows.length > 0;  // Devuelve true si el usuario fue eliminado
    } catch (error) {
        throw new Error('Error al eliminar el usuario: ' + error.message);
    }
};

// EXPORTAR LOS MÉTODOS
module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
