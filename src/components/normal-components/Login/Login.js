import AOS from "aos";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import firebaseConfig from "./Firebase.config";
import "./Login.css";
AOS.init();

export default function Login() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  //////////////
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  ////////////////////////////

  const [, setLoggedInUser] = useContext(UserContext);
  const [login, setLogin] = useState(true);
  const [Msg, setMsg] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);

    if (data.password === data.confirmPassword && login && data.name !== "") {
      handleSignUp(data.email, data.password, data.name);
    }
    if (data.password === data.confirmPassword && login) {
      setMsg("Password doesn't match.");
    }

    if (!login) {
      handleSignIn(data.email, data.password);
    }
  };
  const handleSignUp = (email, password, name) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserName(name, user);
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMsg(errorMessage);
      });
  };

  const handleSignIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoggedInUser(user);
        console.log(user);
        history.replace(from);
      })
      .catch((error) => {
        setMsg(error.message);
      });
  };
  const updateUserName = (name, userinfo) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("Username updated successfully.");
        setLoggedInUser(userinfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ////////////////////////
  //HANDLE GOOGLE SIGN IN
  //////////////////////
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        setLoggedInUser(user);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;

        setMsg(errorMessage);
      });
  };
  return (
    <div className="login">
      <Navigation />
      <div className="py-5">
        <Container>
          <div
            className=" mx-auto p-4 form-container bg-light shadow"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {login ? (
              <h3 className="mb-3">Sign Up</h3>
            ) : (
              <h3 className="mb-3">Login</h3>
            )}

            <form onSubmit={handleSubmit(onFormSubmit)}>
              {login && (
                <Form.Control
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className="mb-2"
                />
              )}
              <Form.Control
                type="email"
                placeholder="Your Email"
                {...register("email", { pattern: /\S+@\S+\.\S+/ })}
                className="mb-2"
              />
              {errors.email && <p className="text-danger">Email is invalid.</p>}
              {!login ? (
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  required
                  className="mb-2"
                />
              ) : (
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="mb-2"
                />
              )}
              {errors.password && (
                <p className="text-danger" style={{ fontSize: "13px" }}>
                  Invalid Password.
                </p>
              )}
              {login && (
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="mb-2"
                />
              )}

              {login ? (
                <button
                  type="submit"
                  className="btn w-100 d-block bg-danger text-light"
                >
                  Create an account
                </button>
              ) : (
                <button className="btn w-100 d-block bg-danger text-light">
                  Login
                </button>
              )}
              <p className="text-center text-danger mt-1">{Msg}</p>

              {login ? (
                <p className="mt-3 text-center">
                  Already have an account?
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setLogin(!login)}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p className="mt-3 text-center">
                  Yet not sign up?
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setLogin(!login)}
                  >
                    Sign Up
                  </span>
                </p>
              )}
            </form>
          </div>
          <h4 className="text-center  my-3 text-danger ">OR</h4>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-danger mx-auto d-block login-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>{" "}
            {"  "}
            Sign In With Google
          </button>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
