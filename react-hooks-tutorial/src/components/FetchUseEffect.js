import React, { useState, useEffect } from "react";

function FetchUseEffect() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setData(json.data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <input
        onChange={(e) => setId(e.target.value)}
        placeholder="enter the user id to fetch data"
      ></input>
      <div>
        <article
          className="d-flex justify-content-center align-content-center"
          style={{ margin: "50px", minHeight: "70vh" }}
        >
          {loading ? (
            <img src="/loading.svg" alt="loading..." />
          ) : (
            <div className="w-100">
              <img
                src={data.avatar}
                alt="user"
                className="w-50 border p-1 mx-auto d-block"
              />
              <h1 className="display-4 text-center mt-3">
                Hi! My name is{" "}
                <strong>{data.first_name + " " + data.last_name}</strong>
              </h1>
              <h1 className="display-6 text-center mt-3">
                My E-mail is <strong>{data.email}</strong>
              </h1>
            </div>
          )}
        </article>
        {/* <NavLinks {...propsForChild} /> */}
      </div>
    </div>
  );
}

export default FetchUseEffect;
