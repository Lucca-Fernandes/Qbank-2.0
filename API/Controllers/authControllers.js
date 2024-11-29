import User from '../Models/userModel.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        let { name, email, password, confirm_password, role } = req.body;

        // Verificar se todos os campos obrigatórios foram preenchidos
        if (!name || !email || !password || !confirm_password) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        // Verificar se o email já existe no banco de dados
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email já está em uso' });
        }

        // Verificar se as senhas coincidem
        if (password !== confirm_password) {
            return res.status(400).json({ message: 'As senhas não coincidem.' });
        }

        // Criar o novo usuário
        const newUser = new User({
            name,
            email,
            password, // Senha em texto simples
            role: role || 'user',
        });

        // Salvar o usuário no banco de dados
        await newUser.save();

        res.status(201).json({
            message: 'Usuário registrado com sucesso!',
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
        });
    } catch (error) {
        console.error('Erro no servidor', error);
        res.status(500).json({ message: 'Erro ao servidor', error: error.message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Procurar o usuário no banco de dados pelo email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }

        // Comparar as senhas diretamente (sem criptografia)
        if (user.password !== password) {  // Comparação direta da senha em texto simples
            return res.status(400).json({ message: 'Senha incorreta' });
        }

        // Gerar o token JWT
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({ token, name: user.name });
    } catch (error) {
        console.error('Erro no servidor', error);
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); // Busca todos os usuários no banco de dados
      res.status(200).json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  };