const express = require('express'); // backend framework
const budget = require("./models/budget.js") // import
const app = express();



//Middleware
app.use("/static", express.static("public"))// it's going serve files from a folder called "public" under /static example public/styles.css => /static/styles.css

app.use(express.urlencoded({ extended: true})); // parse data from the form submissions into the req.body


// INDEX ROUTE - GET to /budgets 
//- Returns all 


app.get("/budget", (req, res) => {
  let bankAccount = 0;
  budget.forEach(b => {
    bankAccount = bankAccount + parseInt(b.amount);
  });
  req.app.locals.bgColor = 'clear';
  if(bankAccount <=0)
  {
    req.app.locals.bgColor = 'red';
  }
  else if (bankAccount >= 1000){
    req.app.locals.bgColor = 'green';
  }
  req.app.locals.bankAccount = bankAccount;
res.render("index.ejs")
});



// New Route - GET to /budgets/new 
//- render a page with a form to create a new thing
app.get("/budget/new", (req, res) => {

  res.render("new.ejs");
});





// Create Route - POST to /budgets
// - receive the data from the form and create a new  then redirect the user back to index

app.post("/budget/", (req, res) => {
 // console.log(req.body) //test
  budget.push(req.body)//push the new buget
  res.redirect("/budget")//send back to main page
});




//SHOW ROUTE - GET to /budgets/:index 
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