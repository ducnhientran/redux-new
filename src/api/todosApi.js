import axiosClient from "./axiosClient";

 const todosApi = {
  getAll: (params) => {
    const url = '/todos';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/todos/${id}`;
    return axiosClient.get(url);
  },
}

export default todosApi;
