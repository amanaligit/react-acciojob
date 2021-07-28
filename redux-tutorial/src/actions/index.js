// counter reducers:

export const increment = () => {
  // function returns our action
  return {
    type: "icrement",
  };
};

export const decrement = () => {
  // function returns our action
  return {
    type: "DECREMENT",
  };
};

// user reducers:
export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    //   payload is extra information sent with the action
    payload: username,
  };
};

export const setPassword = (password) => {
  return {
    type: "SET_PASSWORD",
    //   payload is extra information sent with the action
    payload: password,
  };
};

export const setFetchData = (payload) => {
  return {
    type: "SET_FETCH_DATA",
    payload: payload,
  };
};

export const dataLoading = () => {
  return {
    type: "DATA_LOADING",
  };
};
