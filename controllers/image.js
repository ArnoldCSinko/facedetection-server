const { callClarifaiAPI } = require("../clarifai");
const handleEntries = db => (req, res) => {
  const { id, imageUrl } = req.body;
  if (!id || !imageUrl) {
    res.status(400).json("Must have valid id and image url");
  } else {
    db("users")
      .where({ id })
      .increment({
        entries: 1
      })
      .returning("entries")
      .then(entries => {
        if (entries.length) {
          callClarifaiAPI(imageUrl).then(data => {
            const faceLocation =
              data.outputs[0].data.regions[0].region_info.bounding_box;
            res.json({ entries, faceLocation });
          });
        } else {
          res.status(400).json("Error updating");
        }
      })
      .catch(err => res.status(400).json("Error updating"));
  }
};

module.exports = {
  handleEntries
};
