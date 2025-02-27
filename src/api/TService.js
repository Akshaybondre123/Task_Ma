import axios from "axios";

const API_URL = "http://localhost:8080/tasks";

export const getTasks = async () => {
  return axios.get(API_URL);
};

export const getTaskById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addTask = async (task) => {
  return axios.post(API_URL, task);
};

export const updateTask = async (id, task) => {
  return axios.put(`${API_URL}/${id}`, task);
};

export const deleteTask = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
