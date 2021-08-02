import React from "react";

function Nav() {
  return (
    <nav className="bg-dark">
      <img
        src="https://manmatters.com/wp-content/uploads/2019/12/new-man-logo.png"
        alt="logo"
        id="logo"
      />
      <div id="message" className="text-white">
        <span>Congratulations</span>
        <img
          src="http://cdn.shopify.com/s/files/1/1061/1924/products/4_grande.png?v=1571606116"
          alt=""
          id="emoji"
        />
      </div>
      {/* Paytm card: */}
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png"
          alt=""
        />
        <div className="card-title">Gift Card ₹200</div>
      </div>
    </nav>
  );
}

export default Nav;
