import React from "react";

function NavBar() {
  return (
    <div className="btn-group w-100" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-secondary">
        Previous
      </button>
      <button type="button" className="btn btn-secondary">
        1
      </button>
      <button type="button" className="btn btn-secondary">
        2
      </button>
      <button type="button" className="btn btn-secondary">
        3
      </button>
      <button type="button" className="btn btn-secondary">
        Next
      </button>
    </div>
  );
}

export default NavBar;
