import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../functions/fetchData";

function API() {
  const dispatch = useDispatch();
  const [id, setId] = useEffect(1);

  useEffect(() => {
    dispatch(fetchData(id));
  }, [id]);

  return <div>This is API component</div>;
}

export default API;
