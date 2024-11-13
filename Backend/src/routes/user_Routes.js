const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_Controller');

// Rutas para manejar los usuarios
router.get('/users', userController.getUsers);  // Obtener todos los usuarios
router.post('/users', userController.createUser);  // Crear un nuevo usuario
router.get('/users/:id', userController.getUserById);  // Obtener un usuario por ID
router.put('/users/:id', userController.updateUser);  // Actualizar un usuario por ID
router.delete('/users/:id', userController.deleteUser);  // Eliminar un usuario por ID

module.exports = router;
