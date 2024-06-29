const usersreducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_USERS":
        return action.payload;
      case "UPDATE_CURRENT_USER":
        return state.map((user) => user._id === action.payload._id ? action.payload : user);
      default:
        return state;
    }
  };
  
  export default usersreducer;
  