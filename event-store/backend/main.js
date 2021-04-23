import config from "./../config/config";
import app from "./express";
import mongoose from 'mongoose'
import Index from "./../public/index.js";

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true } )
 
mongoose.connection.on('error', () => {
  throw new Error(`Failed to connect to DB: ${mongoUri}`)
 })

 

app.get("/", (req, res) => {
  res.status(200).send(Index());
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Serve started on ports: %s.", config.port);
});




