import axios from "axios";

const httpDefault = axios.create({
  baseURL: "https://amazon-api.sellead.com",
});

export default httpDefault;
