import * as api from '../api';

// Fetch all users action
export const fetchallusers = () => async (dispatch) => {
  try {
    const { data } = await api.getallusers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Update profile action
export const updateprofile = (id, updatedData) => async (dispatch) => {
  try {
    const { data } = await api.updateprofile(id, updatedData);
    console.log(data)
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log("Error in action:", error.message);
  }
};
