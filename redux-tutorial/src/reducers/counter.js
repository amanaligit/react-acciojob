const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "icrement":
      return state + 1;
    case "DECREMENT":
      // this is wrong:
      // state = state +1
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
