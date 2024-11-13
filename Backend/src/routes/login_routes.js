const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login_controller');

// Rutas para manejar el login
router.get('/login', loginController.autenticar);

module.exports = router;