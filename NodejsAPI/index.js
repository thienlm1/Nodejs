const express = require("express");
const cors = require("cors");
const router = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5555;
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
const corsOptions = {
    origin: 'http://localhost:2023',
    credentials: true,

}
app.use(cors(corsOptions));
app.set('view engine', 'hbs');
app.set("views", "./views");
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(cookieParser())


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


app.use(router);
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});