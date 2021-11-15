import axios from "axios";

const api = axios.create({
    baseURL: 'https://flashcard-api-mayck.herokuapp.com/api'
  });
  export default api;