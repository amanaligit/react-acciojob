import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <p className="text-center">Copyright &copy; LifeCycleAPI.com</p>
      <div className="d-flex justify-content-center">
        <Link to="/home" className="m-4">
          Home
        </Link>
        <Link to="/about" className="m-4">
          About
        </Link>
        <Link to="/users/1" className="m-4">
          Users
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
