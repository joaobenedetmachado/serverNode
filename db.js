import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://joaobenedet2177:3JdGZS33Tzxigzeh@servernode.mongodb.net/siteoficial';

// Função para conectar ao MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão com o MongoDB bem-sucedida!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra o processo em caso de falha na conexão
    }
};

export default connectDB;
