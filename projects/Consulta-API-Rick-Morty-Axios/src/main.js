const axios = require("axios");


const llamadaApiRickAndMorty = async () => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=2"
    );

    console.log("Response: ", response.data);
  } catch (error) {
    console.error("Error: ", error.message);
  }
};




llamadaApiRickAndMorty();
