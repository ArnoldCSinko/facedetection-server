const Clarifai = require("clarifai");

const app = new Clarifai.App({
  apiKey: process.env.API_KEY
});

const callClarifaiAPI = async imageUrl => {
  const response = await app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    imageUrl
  );
  return response;
};
module.exports = {
 callClarifaiAPI
};