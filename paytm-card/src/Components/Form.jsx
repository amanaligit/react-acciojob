import React, { useState } from "react";
import Footer from "./Footer";

function Form() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    localStorage.setItem("paytm-number", input);
  };

  const alreadyRegistered = localStorage.getItem("paytm-number") !== null;
  const phoneIsValid = /^\d{10}$/.test(input);

  if (alreadyRegistered) {
    return (
      <>
        <div className="container" id="complete">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt=""
          />
          <div>
            <h2>Whre will I get the gift card?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              autem.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt=""
          />
          <div>
            <h2>Whre will I get the gift card?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              autem.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
            alt=""
          />
          <div>
            <h2>Whre will I get the gift card?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              autem.
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <div className="container">
      <p id="p1">
        You have WON Paytm Gift Card of Rs 200{" "}
        <b>placing the order on Man Matters</b>
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="tel"
            name="number"
            className="form-control"
            id="phone"
            maxLength="10"
            placeholder="Enter Mobile Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <p id="p2">
          <b>Enter the same number used on Man Matters</b>
        </p>
        <input
          type="submit"
          name="submit"
          id="submit"
          className={`${!phoneIsValid ? "disabled" : ""}`}
          value="Wow! Get my Paytm Gift Card"
        />
      </form>
      <Footer />
    </div>
  );
}

export default Form;
