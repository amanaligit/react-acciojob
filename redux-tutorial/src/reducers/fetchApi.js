const fetchReducer = (state = { loading: false, data: {} }, action) => {
  switch (action.type) {
    case "SET_FETCH_DATA":
      return { ...state, data: action.payload, loading: false };
    case "DATA_LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default fetchReducer;
