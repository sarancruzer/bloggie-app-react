import customAxios from "../../http.common";


class blogService {
  
  
  getAll() {
    return customAxios.get("/tutorials");
  }

  getByTags(params: any) {
    return customAxios.post(`/blogs/tags/`, {}).then(res => res.data);
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

export default new blogService();