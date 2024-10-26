const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const authroutes = require("./routes/auth")
const jobRoute = require("./routes/jobs")
const { dbConnect } = require("./config/dbConnection");
const PORT = process.env.PORT || 5000;



dotenv.config()
app.use(express.json());
app.use(cors({origin:'*',credentials:true}));

dbConnect();

app.use("/api", authroutes);
app.use("/api", jobRoute);


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})