const express = require("express");
const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());
const { controllers } = require("./controllers");
const { db } = require("./db");

app.get("/", controllers.handleIndex(db));
app.get("/profile/:id", controllers.handleProfile(db));
app.post("/signin", controllers.handleSignin(db, bcrypt));
app.post(
	"/register",
	controllers.handleRegister(db, bcrypt)
);
app.put("/image", controllers.handleEntries(db));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
