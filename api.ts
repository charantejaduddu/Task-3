import axios from "axios";

const API_URL = "http://127.0.0.1:31234"; // Update if using a different port

export const fetchTasks = async () => axios.get(`${API_URL}/tasks`);
export const createTask = async (task: any) => axios.put(`${API_URL}/tasks`, task);
export const executeTask = async (id: string) => axios.put(`${API_URL}/tasks/${id}/execute`);
export const deleteTask = async (id: string) => axios.delete(`${API_URL}/tasks/${id}`);