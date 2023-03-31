const express = require('express')
const app = express()
const port = 3000
const Absence = require("./models/absence");
const  Chef = require("./models/chef");
const  Demande = require("./models/demande");
const  Department = require("./models/department");
const  Enterprise = require("./models/enterprise");
const  Etudiant = require("./models/etudiant");
const  Faculter = require("./models/faculter");
const  Note = require("./models/note");
const  Stage = require("./models/stage");
const  Universite = require("./models/universite");
const  Responsable = require("./models/responsable");
app.set("view engine", "ejs");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DATA BASE
const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb+srv://rami:1234@cluster0.38dzh5k.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((result) => {
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    })

.catch((err) => {
    console.log(err);
});


// User type
app.get("/", (req, res) => {
  res.redirect("/chooseUT");
});
app.get("/chooseUT", (req, res) => {
  res.render("CU");
});



// login chef
app.get("/provideinfoC", (req, res) => {
  res.render("provideinfoC", { mytitle: "Login As CHEF Department" });
});

app.post("/infoCprovided", (req, res) => {
  
 Chef.findOne({ EmailC: req.body.email, PasswordC: req.body.pass }, function(err, docs) {
      if (err) {
          console.log(err);
      } else if (docs == null) {
          res.redirect("/provideinfoC");
      } else {

          res.redirect("/notif");

      }
  });
  global.nma = req.body.name;
  global.psa = req.body.pass;

});


// login Responsable
app.get("/provideinfoR", (req, res) => {
  res.render("provideinfoR", { mytitle: "Login As Responsable de satge" });
});

app.post("/infoRprovided", (req, res) => {
  
 Responsable.findOne({ EmailR: req.body.email, PasswordR: req.body.pass }, function(err, docs) {
      if (err) {
          console.log(err);
      } else if (docs == null) {
          res.redirect("/provideinfoR");
      } else {

          res.redirect("/notif");

      }
  });
  

});

// login chef
app.get("/provideinfoE", (req, res) => {
  res.render("provideinfoE", { mytitle: "Login As ETUDIANT" });
});

app.post("/infoEprovided", (req, res) => {
  
 Etudiant.findOne({ EmailE: req.body.email, PasswordE: req.body.pass }, function(err, docs) {
      if (err) {
          console.log(err);
      } else if (docs == null) {
          res.redirect("/provideinfoE");
      } else {

          res.redirect("/notif");

      }
  });
 

});
