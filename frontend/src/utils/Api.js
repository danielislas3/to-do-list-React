import Axios from 'axios';



class Api {
  constructor() {
    this.axios = Axios;
    this.axios.defaults.headers.common['content-type'] = 'application/json';
    this.axios.defaults.baseURL = 'http://localhost:4000'
  }

  async login(payload) {
    return await this.axios.post("/login", payload);
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
