const loginService = require('../services/login_service');

const autenticar = async (req, res) => {
    try {
        const autorizado = await loginService.authenticateUser(req.body);
        if (autorizado) {
            res.json({ message : 'El Usuario existe', exists : true});
        } else {
            res.json({ message : 'El Usuario no existe', exists : false});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al verificar las credenciales', error: error.message });
    }
};

module.exports = {
    autenticar
}