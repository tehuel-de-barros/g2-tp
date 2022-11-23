import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors'

const PORT = process.env.PORT        || 8000;
const DB   = process.env.MONGODB_URI || 'mongodb+srv://User:admin@cluster0.djqnf9d.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(morgan('dev'));
mongoose.connect(DB)
      .then(() => console.log("Todo OK"))
      .catch(err => console.log(err));

// .catch(err => console.error(`Connection error ${err}`));

// el server escucha todo

app.use(cors());
import router from './routes.js';
app.use('/api', router);
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`);});
