import API_LOCAL_URL from "./ApiConfig.js";

export const getTasks = async () => {
  try {
    const response = await API_LOCAL_URL.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addTask = async (task) => {
  try {
    const response = await API_LOCAL_URL.post("/", task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const deleteTask = async (id) => {
  try {
    const response = await API_LOCAL_URL.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const updateTask = async (task) => {
  try {
    const response = await API_LOCAL_URL.patch(`/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}