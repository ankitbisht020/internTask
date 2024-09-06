import axios from "axios";


//  use https://crudcrud.com/ website for REST api
export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://crudcrud.com/api/0aa0c5780c4649b591a6bc24b02301c0",
  headers: {
    "Content-type": "application/json",
  }
});