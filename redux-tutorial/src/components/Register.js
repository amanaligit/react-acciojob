import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Register({ show, setShow }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const passwordIsInalid =
    /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[^~!@#$%^&*()]*)$/g.test(password);

  const emailIsInvalid = /^(.*@.*\..{2,5})$/g.test(email);
  console.log(emailIsInvalid);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control is-invalid"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control ${
                passwordIsInalid ? "is-invalid" : "is-valid"
              }`}
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit disabled" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setShow(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Register;
