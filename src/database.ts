import config from './config/config';
import mongoose from 'mongoose';

mongoose.connect(config.DB.URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB ContactBook database connection established successfully');
});

connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
});