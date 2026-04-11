 import express from "express"
import dotenv from "dotenv"
import userRouter from "./Routes/user.routes.js"
import eventsRouter from "./Routes/event.routes.js"
import predictRouter from "./Routes/predict.routes.js"
import cors from "cors"
// import cartRouter from "./Routes/cart.routes.js"
import connectDB from "./db/db.js"
import cookieParser from "cookie-parser"
dotenv.config()
// console.log(process.env.ACCESS_TOKEN_SECRET)
// console.log(process.env.REFRESH_TOKEN_SECRET)
// origin: "https://eventletics.vercel.app",
connectDB()
const app=express();
app.use(cors({
  origin: "https://eventletics.vercel.app",
  credentials: true
}));

app.use(express.json());//parse req.body
app.use(cookieParser());

app.use("/api/auth",userRouter)
app.use("/api/events",eventsRouter);
app.use("/api/predict",predictRouter);

const PORT=process.env.PORT||5000

app.listen(5000,console.log(`server started on ${PORT}`));