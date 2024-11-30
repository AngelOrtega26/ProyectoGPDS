// Cargar dotenv al inicio del proyecto
require('dotenv').config();

const express = require('express');
const { connectDB, pool } = require('./src/config/db');
const userRoutes = require('./src/routes/user_Routes');
const loginRoutes = require('./src/routes/login_routes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

// Conectar a la base de datos
connectDB();

// Middleware para CORS
const corsOptions = {
    origin: 'http://localhost:81', // Cambia esto al dominio de tu frontend en producción
    methods: 'GET,POST,PUT,DELETE', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization', // Encabezados permitidos
};
app.use(cors(corsOptions));

// Middleware para procesar JSON
app.use(express.json());

// Rutas
app.use('/api', userRoutes);
app.use('/api', loginRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
