import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:5173',  // Certifique-se de que esta URL seja a do seu front-end
  methods: 'GET,POST,PUT,DELETE',  // Métodos permitidos
  allowedHeaders: 'Content-Type,Authorization',  // Cabeçalhos permitidos
};

app.use(cors(corsOptions));  // Habilita o CORS

app.use(express.json()); // Middleware para parsear JSON

// Roteamento de autenticação
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
};

startServer();
