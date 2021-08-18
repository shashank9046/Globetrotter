import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import config from 'config'
const db = config.get('CONNECTION_URL')

import postRoutes from './routes/posts.js';


const app = express()



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes);
const PORT = process.env.PORT || 5000
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(console.message))
mongoose.set('useFindAndModify', false)
