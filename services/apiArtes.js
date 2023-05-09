const { default: axios } = require("axios");

const apiArtes = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiArtes;
