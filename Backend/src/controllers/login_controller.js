const loginService = require('../services/login_service');

const autenticar = async (req, res) => {
    try {
        const autorizado = await loginService.autenticar(req.body);
        if (autorizado) {
            res.json({ mensage : 'El Usuario existe'});
        } else {
            res.json({ mensage : 'El Usuario no existe'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al verificar las credenciales', error: error.message });
    }
};

module.exports = {
    autenticar
}