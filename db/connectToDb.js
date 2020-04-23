import mongoose from 'mongoose';

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(() => console.log('Error connecting to DB'));
  return mongoose.connection;
};

module.exports = connectToDb;
