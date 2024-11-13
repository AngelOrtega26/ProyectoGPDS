// Cargar dotenv al inicio del proyecto
require('dotenv').config();

const express = require('express');
const { connectDB, pool } = require('./src/config/db'); // Ejemplo: Archivo db.js para conexión a DB
const userRoutes = require('./src/routes/user_Routes'); // Ajusta la ruta según tu estructura

const app = express();
const PORT = process.env.PORT;

// Conectar a la base de datos
connectDB();

// Middleware y rutas
app.use(express.json());

// USUARIOS
app.use('/api', userRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
