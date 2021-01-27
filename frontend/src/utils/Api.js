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
    return await this.axios.post("/task/create", payload,this.axiosConfig);
  }
  async getAllTasks() {
    return await this.axios.get("/tasks", this.axiosConfig);
  }

  async completeTask(id) {
    return await this.axios.put("/tasks/completed/" + id, this.axiosConfig);
  }
  async deleteTask(id) {
    return await this.axios.delete("/tasks/delete/" + id, this.axiosConfig);
  }

}
const api = new Api();


export { api };
