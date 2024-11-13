const { Pool } = require('pg');

// Configuración de la base de datos (puedes usar variables de entorno)
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
};

const pool = new Pool(dbConfig);

const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');
        client.release(); // Libera la conexión para ser reutilizada
    } catch (error) {
        console.error('Error al conectar a PostgreSQL:', error);
        process.exit(1);
    }
};

module.exports = { pool, connectDB };
