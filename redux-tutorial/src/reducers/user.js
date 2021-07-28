const userReducer = (
  state = { username: "Aman", password: "aman1234" },
  action
) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default userReducer;
