const express = require("express");
const app = express();
const DB = require("./db/index");
const autoModel = require("./models/auto.model");
const PORT = 8000;

// Connecting Database
DB();

// Allowing JSON Objects
app.use(express.json());

// Create route
app.post("/create", async function (req, res) {
    const vehicles = new autoModel(req.body);
  
    try {
      await vehicles.save();
      res.send("Data Saved Successfully...!");
    } catch (error) {
      res.send(error.message);
    }
  
  });
  
  // Read route
  app.get("/get-auto", async function (req, res) {
    const vehicles = await autoModel.find({});
  
    try {
      res.send(vehicles);
    } catch (error) {
      res.send(error);
    }
  
  });
  
  // Update route
  app.put("/edit-auto/:id", async function (req, res) {
    
    try {
      await autoModel.findByIdAndUpdate(req.params.id, req.body);
      res.send("Data Updated Successfully...!");
    } catch (error) {
      res.send(error.message);
    }
  
  });
  
  // Delete route
  app.delete("/new-auto/:id", async function (req, res) {
  
    try {
      const vehicles = await autoModel.findByIdAndDelete(req.params.id);
      res.send("Data Deleted Successfully...!");
    } catch (error) {
      res.send(error.message);
    }
  
  });
  
  app.listen(PORT, console.log("Server Listening On Port " + PORT));