import customAxios from "../../http.common";


class AuthService {
  
  authenticate(data: any) {
    return customAxios.post("/auth/login", data);
  }

  register(data: any) {
    return customAxios.post("/auth/register", data);
  }


  getAll() {
    return customAxios.get("/tutorials");
  }

  get(id: any) {
    return customAxios.get(`/tutorials/${id}`);
  }

  create(data: any) {
    return customAxios.post("/tutorials", data);
  }

  update(id: any, data: any) {
    return customAxios.put(`/tutorials/${id}`, data);
  }

  delete(id: any) {
    return customAxios.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return customAxios.delete(`/tutorials`);
  }

  findByTitle(title: any) {
    return customAxios.get(`/tutorials?title=${title}`);
  }
}

export default new AuthService();