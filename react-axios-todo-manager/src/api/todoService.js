import axiosInstance from "./axiosInstance";

export const getTodos = async () => {
  const response = await axiosInstance.get("/todos");
  return response.data;
};

export const getTodoById = async (id) => {
  const response = await axiosInstance.get(`/todos/${id}`);
  return response.data;
};
