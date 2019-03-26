const handleSignin = (db, bcrypt) => (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json("Must have both email and password");
  } else {
    db.select("email", "hash")
      .from("login")
      .where({ email: email })
      .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
        if (isValid) {
          return db
            .select("*")
            .from("users")
            .where({ email: email })
            .then(user => {
              res.json(user[0]);
            })
            .catch(err => res.status(400).json("unable to get user"));
        } else {
          return res.status(400).json("Invalid password");
        }
      })
      .catch(err => res.status(400).json("Invalid email"));
  }
};

module.exports = {
  handleSignin
};
