import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ setPageNo, pageNo }) {
  // console.log(setPageNo, pageNo);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="btn-group w-100" role="group" aria-label="Basic example">
      {/* NavLink needs a "to" prop that works similarly to href  */}
      <NavLink
        className={`btn ${parseInt(pageNo) == 1 ? "disabled" : ""}`}
        to={`/users/${parseInt(pageNo) - 1}`}
      >
        Previous
      </NavLink>

      {numbers.map((number) => (
        <NavLink
          className={`btn ${
            number == parseInt(pageNo) ? "btn-primary" : "btn-secondary"
          }`}
          to={`/users/${number}`}
          key={number}
        >
          {number}
        </NavLink>
      ))}

      <NavLink
        className={`btn ${parseInt(pageNo) == 10 ? "disabled" : ""}`}
        to={`/users/${parseInt(pageNo) + 1}`}
      >
        Next
      </NavLink>
    </div>
  );
}

export default NavLinks;
