import express from 'express';
import connectDB from './db.js'; // Importando a conexão com o DB
import publicRoutes from './routes/public.js';

const app = express();
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Usar as rotas
app.use('/', publicRoutes);

// Exportar o servidor como uma função
export default async function handler(req, res) {
  return app(req, res);
}