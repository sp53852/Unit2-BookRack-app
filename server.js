require('dotenv').config();
const express = require("express");
const app = express();

const methodOverride = require('method-override');


//MIDDLEWARE
app.use(express.static("public"));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use("/books", require("./controllers/booksController.js"));
app.use("/readers", require("./controllers/readersController.js"));





// app.listen(3000, () => {
//     console.log("Server is listening!!!")
// });

app.listen(process.env.PORT, () => {
    console.log("Server is listening!!!")
});