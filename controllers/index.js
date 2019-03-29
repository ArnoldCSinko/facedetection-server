const { handleRegister } = require("./register");
const { handleSignin } = require("./signin");
const { handleEntries } = require("./image");
const { handleProfile } = require("./profile");

const handleIndex = (req, res) => {
	// db.select()
	//   .table("users")
	//   .then(data => res.json(data));
	res.status(200).send("Welcome to facedetection API");
};

module.exports = {
	controllers: {
		handleRegister,
		handleSignin,
		handleEntries,
		handleProfile,
		handleIndex
	}
};
