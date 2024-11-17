import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://joaobenedet2177:3JdGZS33Tzxigzeh@servernode.mongodb.net/siteoficial';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

export default mongoose;