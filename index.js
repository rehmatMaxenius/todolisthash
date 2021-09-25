import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import listRoutes from './routes/listRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/lists', listRoutes);
app.use('/todos', todoRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to todo list app');
});

const PORT = process.env.PORT || 5000;

//heroku
if(process.env.NODE_ENV = "production"){
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() => {
    app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
})
.catch(err => {
    console.log(err.message);
});
