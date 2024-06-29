import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:4000"
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("Profile")).token
        }`;
    }
    return req;
});

export const login = (authdata) => API.post("user/login", authdata);
export const signup = (authdata) => API.post("user/signup", authdata);
export const getallusers = () => API.get("/user/getallusers");
export const updateprofile = async (id, updatedata) => {
    try {
      const response = await API.patch(`/user/update/${id}`, updatedata);
      return response.data; // Return the updated user profile data
    } catch (error) {
      console.error("Error updating profile:", error.message); // Log any errors for debugging
      throw error; // Re-throw the error to handle it further up the chain
    }
  };
export const postquestion = (questiondata) => API.post("/questions/Ask", questiondata);
export const getallquestions = () => API.get("/questions/get");
export const deletequestion = (id) => API.delete(`/questions/delete/${id}`);
export const votequestion = (id, value) => API.patch(`/questions/vote/${id}`, { value });

export const postanswer = (id, noofanswers, answerbody, useranswered) => API.patch(`/answer/post/${id}`, { noofanswers, answerbody, useranswered });
export const deleteanswer = (id, answerid, noofanswers) => API.patch(`/answer/delete/${id}`, { answerid, noofanswers });
