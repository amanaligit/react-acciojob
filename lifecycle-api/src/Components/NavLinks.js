import React from "react";

function NavLinks({ setPageNo, pageNo }) {
  // console.log(setPageNo, pageNo);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="btn-group w-100" role="group" aria-label="Basic example">
      <button
        type="button"
        className={`btn ${pageNo == 1 ? "disabled" : ""}`}
        onClick={() => setPageNo(pageNo - 1)}
      >
        Previous
      </button>

      {numbers.map((number) => (
        <button
          type="button"
          className={`btn ${
            number == pageNo ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => setPageNo(number)}
          key={number}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        className={`btn ${pageNo == 10 ? "disabled" : ""}`}
        onClick={() => setPageNo(pageNo + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default NavLinks;
