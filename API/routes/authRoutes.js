import express from 'express';
import * as authControllers from '../Controllers/authControllers.js'


const router = express.Router();

// Rota de registro
router.post('/register', authControllers.register);

// Rota de login
router.post('/login', authControllers.login);

router.get('/users', authControllers.getAllUsers);  // Agora essa linha vai funcionar


export default router;
