import React, { useRef } from "react";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase.Init";

const SignUp = () => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleSubmit = (event) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  // const [loginUser, loginloading, loginerror] = useAuthState;
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  console.log(user);
  return (
    <div className="form-container d-flex flex-column justify-content-center">
      <h1 className="titl">Sign Up</h1>
      <form>
        <label htmlFor="name">
          <input
            // onBlur={(event) => handleFormInpur(event)}
            ref={nameRef}
            className="inp form-control"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            // onBlur={(event) => handleFormInpur(event)}
            ref={emailRef}
            className="inp form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            // onBlur={(event) => handleFormInpur(event)}
            ref={passwordRef}
            className="inp form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </label>
        <br />

        <p>
          <Link className="text-decoration-none text-primary" to="/login">
            Sign In
          </Link>{" "}
        </p>
        <div>
          <input
            onClick={handleSubmit}
            className="signInBtn px-3"
            type="button"
            value="Sign Up"
          />
          <a href="">
            <img src="https://i.ibb.co/0ydWNnY/google-Logo-1.png" alt="" />
          </a>
          <a href="">
            <img
              className="facebook-icon"
              src="https://i.ibb.co/Rj85LRS/Facebook-Logo-1.png"
              alt=""
            />
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;