import mongoose from 'mongoose';
import connectDB from './db.js';

connectDB();

const dataSchema = new mongoose.Schema({
    temperatura: Number,
    umidade: Number,
    nivelGas: Number,
    gps: String,
    nivelLuz: Number,
    botaoPanico: Boolean,
});

const DataModel = mongoose.model('Data', dataSchema);

export default DataModel;
