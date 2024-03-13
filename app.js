const express= require('express');
const dotenv= require('dotenv');
const connectDB = require('./config/db');
// const router = require('./Route/userRoutes');
const userRoutes= require('./Route/userRoutes');
const path= require('path');
const cors = require('cors');

const app= express();
app.use(express.json());
dotenv.config();
connectDB();
const corsOptions = {
    origin: 'https://invoice-generator-client-9tb1.onrender.com/', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'] // Add allowed headers as needed
  };
  
  // Enable CORS with custom options
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

  app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/',(req,res)=>{
    res.send("server is running");
})
app.use('/api/user',userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`);
})
