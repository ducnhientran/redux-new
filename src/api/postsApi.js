import axiosClient from "./axiosClient";

const postsApi = {
  getAll: (params) => {
    const url = '/posts';
    return axiosClient.get(url, { params });
  },

}

export default postsApi;

