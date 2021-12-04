require("dotenv").config();

const express = require('express')
const app = express()
const port = 3000

const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGOURL)
    .then(()=>console.log("Connected"));


const company = require("./router/hospital");
app.use("/company",company);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))