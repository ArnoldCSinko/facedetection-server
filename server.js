const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

const { controllers } = require("./controllers");

const knex = require("knex");
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB;

const db = knex({
  client: "pg",
  connection: {
    host: host,
    user: user,
    password: password,
    database: database
  }
});

app.get("/", controllers.handleIndex(db));

app.get("/profile/:id", controllers.handleProfile(db));

app.post("/signin", controllers.handleSignin(db, bcrypt));

app.post("/register", controllers.handleRegister(db, bcrypt));

app.put("/image", controllers.handleEntries(db));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
