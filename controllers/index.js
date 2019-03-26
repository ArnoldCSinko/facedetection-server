const { handleRegister } = require("./register");
const { handleSignin } = require("./signin");
const { handleEntries } = require("./image");
const { handleProfile } = require("./profile");

const handleIndex = db => (req, res) => {
  db.select()
    .table("users")
    .then(data => res.json(data));
}

module.exports = {
  controllers: {
    handleRegister,
    handleSignin,
    handleEntries,
    handleProfile,
    handleIndex
  }
};
