import { dataLoading, setFetchData } from "../actions";

export function fetchData(id = 1) {
  return (dispatch) => {
    dispatch(dataLoading());
    setTimeout(() => {
      fetch("https://reqres.in/api/users/" + id)
        .then((res) => res.json())
        .then((json) => {
          console.log(json.data);
          dispatch(setFetchData(json.data));
        });
    });
  };
}
