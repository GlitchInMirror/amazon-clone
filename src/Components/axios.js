import axios from "axios";

const instance = axios.create({
  baseURL:"...." /// APi Url
});

export default instance;