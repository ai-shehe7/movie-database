
// node modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const PORT = 5000;

const apiToken = process.env.TMDB_ACCESS_TOKEN;
module.exports = apiToken;

// sever stuff
const app = express();

// set statoc folder
// app.use(express.static("dist"));


// routes
// app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use("/api" ,require("./movieRoutes.cjs"));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

