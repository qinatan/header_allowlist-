import express, {Request, Response} from "express";
import cors from "cors"; 
import "dotenv/config";
import headerRouter from './routers/HeaderAllowlistRoute'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", async(req: Request, res: Response)=>{
    res.json({message: "hello, this server is setup by Qina!"})
})


app.use('/allowlist', headerRouter)

app.listen(8000, ()=>{
    console.log("server started on port 8000")
})
