const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/models");
const CRUDRouter = require("./routes/CRUDRouter");
const CRUDController = require("./controllers/Controller");
const { Notebook, Note } = require("./db/models");
const path = require("path");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use("/notes", new CRUDRouter(new CRUDController(Note, "notes")));
app.use(
  "/notebooks",
  new CRUDRouter(new CRUDController(Notebook, "notebooks"))
);

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
