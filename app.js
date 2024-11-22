// import the dependencies
import express from 'express'
import { router } from './routes/route.js'

const app = express()
const PORT = 2200

// set-up middleware for parsing json requests and responses
app.use(express.json())

app.use('/', router)
// setup listener 
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}...`)
})