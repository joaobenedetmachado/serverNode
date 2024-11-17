import mongoose from 'mongoose';
import connectDB from './db.js'; // Importando a conexão com o DB

connectDB(); // Conectando ao banco de dados antes de criar o modelo

const dataSchema = new mongoose.Schema({
    temperatura: { type: Number, required: true },
    umidade: { type: Number, required: true },
    nivelGas: { type: Number, required: true },
    gps: { type: String, required: true },
    nivelLuz: { type: Number, required: true },
    botaoPanico: { type: Boolean, required: true },
}, { timestamps: true }); // Adiciona createdAt e updatedAt automaticamente

const DataModel = mongoose.model('Data', dataSchema);

export default DataModel;