import express from 'express'
import mongoose from 'mongoose'
const app = express();

//DB connect
const db = require('./config/keys').mongoURI

mongoose.
    connect(db)
    .then(() => {
        console.log('mongoDB connect')
    }).catch(err =>{
        console.log(err);
        
    })
app.get('/', (req, res) => res.send('Hello World'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));