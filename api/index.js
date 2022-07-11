const express = require("express")
const app =express()
const mongoose= require("mongoose")
const dontenv=require("dotenv")
const autoRoite=require("./routes/auth")
const userRoutes=require("./routes/users")
const movieRouter=require("./routes/movies")
const listRouter= require("./routes/lists")

dontenv.config();

mongoose.connect(process.env.MONGO_URL ,{

useNewUrlParser: true,
useUnifiedTopology:true,
}).then(()=>{
    console.log("connecit api")
}).catch((err)=>{
    console.log(err)
});


app.use(express.json());
app.use("/api/auth",autoRoite);
app.use("/api/users",userRoutes);
app.use("/api/movies",movieRouter);
app.use("/api/lists",listRouter);

app.listen(8600,()=>{

    console.log("backend is runnig");
});