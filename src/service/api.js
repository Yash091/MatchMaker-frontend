import axios from "axios";
const url = "http://localhost:8000";

export const uploadFile = async (post) => {
  try {
    return await axios.post(`${url}/file/upload`, post);
  } catch (error) {
    console.log("Error while calling uploadFile API ", error);
  }
};

export const createUser = async (user) => {
  try {
    return await axios.post(`${url}/register`, user);
  } catch (err) {
    return err;
  }
};

export const logUser = async (user) => {
  try {
    return await axios.post(`${url}/login`, user, { withCredentials: true });
  } catch (err) {
    return err;
  }
};

export const getUser = async () => {
  try {
    // console.log("APi");
    const data = await axios.get(`${url}/getuser`, { withCredentials: true });
    return data;
  } catch (error) {
    return error;
  }
};

export const editUser = async ( user) => {
  try {
    let res = await axios.post(`${url}/editprofile`, user);
    return res;
  } catch (err) {
    console.log("Error while calling editPost API", err);
  }
};

export const deleteUser = async () => {
  try {
    const data = await axios.delete(`${url}/deleteprofile`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error;
  }
};
