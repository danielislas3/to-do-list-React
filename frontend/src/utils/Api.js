import Axios from 'axios';



class Api {
  constructor() {
    this.axios = Axios;
    this.axios.defaults.baseURL = 'http://localhost:4000'
    this.axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    }
  }

  async login(payload) {

    return await this.axios.post("/login", payload, this.axiosConfig);
  }

  async createTask(payload) {
    return await this.axios.post("/task/create", payload);
  }
  async getAllTasks() {
    return await this.axios.get("/tasks");
  }

  async completeTask(id) {
    return await this.axios.put("/task/completed/" + id,);
  }
  async deleteTask(id) {
    return await this.axios.delete("/task/delete/" + id,);
  }

}
const api = new Api();


export { api };
