const express = require('express'); // backend framework
const budget = require("./models/budget.js") // import
const app = express();

//Middleware
app.use("/static", express.static("public"))// it's going serve files from a folder called "public" under /static example public/styles.css => /static/styles.css



// INDEX ROUTE - GET to /budgets 
//- Returns all 

app.get("/budget", (req, res) => {
res.render("index.ejs")
});



// New Route - GET to /budgets/new 
//- render a page with a form to create a new thing





// Create Route - POST to /budgets
// - receive the data from the form and create a new  then redirect the user back to index
//app.post("/budgets", (req, res) => {




//SHOW ROUTE - GET to /budgets/:index
// - Returns a single 
//Show route should ALWAYS be at the BOTTOM.


const PORT = process.env.PORT || 3000 // set port to value from environment or 3000
app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
});