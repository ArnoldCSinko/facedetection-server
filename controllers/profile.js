const handleProfile = db => (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json("Invalid id");
  } else {
    db("users")
      .where({ id })
      .then(user => {
        if (user.length) {
          res.json(user[0]);
        } else {
          res.status(400).json("Error finding user");
        }
      })
      .catch(err => res.status(400).json("Error"));
  }
};

module.exports = {
  handleProfile
};
