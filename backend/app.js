import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import indexRoute from './routes/indexRoute.js'

const server = express()
server.use(express.json())
server.use(cors())

const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("connected")
    }
    catch(err){console.log(err)} 
}
connectDB()


server.use("/api",indexRoute)

server.use((req,res)=>{
    res.status(404).send("Page Not Found")
})


const port = process.env.PORT || 7000
server.listen(port , ()=>console.log(`server started at http://localhost:${port}`))