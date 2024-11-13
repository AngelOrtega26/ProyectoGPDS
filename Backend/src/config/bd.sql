-- SCRIPT DE LA BASE DE DATOS

-- CREAR LA BD
CREATE DATABASE db_proyecto_gpds;

-- CONECTARSE A LA BD
\c bd_proyecto_gpds;

-- TABLA USUARIOS
CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);
