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
app.get("/budget/new", (req, res) => {
  res.render("new.ejs");//new has the form
});





// Create Route - POST to /budgets
// - receive the data from the form and create a new  then redirect the user back to index

app.post("/budget/:id", (req, res) => {
  
});




//SHOW ROUTE - GET to /budgets/:index
// - Returns a single 
//Show route should ALWAYS be at the BOTTOM.
app.get("/budget/:index", (req,res) => {
res.render("show.ejs",
{
  theBudget: budget[req.params.index]
});
})


const PORT = process.env.PORT || 3000 // set port to value from environment or 3000
app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
});