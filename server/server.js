import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

const app = express()
await connectDB()
app.use(cors())

app.get('/', (req,res) => res.send('Api Working'))

app.post('/clerk', express.json(), clerkWebhooks)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log("Running on 5000")
})