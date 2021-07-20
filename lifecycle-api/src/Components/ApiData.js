import React from "react";

export default function ApiData({ loading }) {
  return (
    <article style={{ margin: "50px", minHeight: "50vh" }}>
      {loading ? (
        <h1 className="display-4 text-center">Loading...</h1>
      ) : (
        <h1 className="display-4 text-center">API Data</h1>
      )}
    </article>
  );
}
