const { pool } = require('../config/db');  // Importar el pool de db.js

// MÉTODO PARA AUTENTICAR EL USUARIO
const authenticateUser = async (datos) => {
    try {
        const { correo, contrasena } = datos;
        const user = await pool.query(
            'SELECT * FROM usuarios WHERE correo = $1 AND contrasena = $2',
            [correo, contrasena]
        );
        const existe = user.rows.length > 0;
        return existe;
    } catch (error) {
        throw new Error('Error al autenticarse: ' + error.message);
    }
};

module.exports = {
    authenticateUser
};
