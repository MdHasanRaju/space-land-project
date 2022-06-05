import React, { useRef, useState } from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./../../../assets/images/login4.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.init";
import SocialAccess from "../SocialAccess/SocialAccess";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
      return;
    }
    setIsPasswordShown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.error("Please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-danger text-start mt-1">Error: {error.message}</p>
    );
  }

  if (loading || sending) {
    return <Loading />;
  }

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#a223f6",
    border: "none",
    padding: "5px 0",
    borderRadius: "5px",
    color: "white",
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img
              width="100%"
              height="100%"
              src={img}
              alt="Image"
              className=""
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4 text-start">
                  <h3>
                    Login to{" "}
                    <strong style={{ color: "#a223f6" }}>Spaceland</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form onSubmit={handleSubmit} method="post">
                  <div className="form-group first text-start ">
                    <label htmlFor="useremail">Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      className="form-control"
                      id="useremail"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="form-group last my-3 text-start position-relative">
                    <label htmlFor="password">Password</label>
                    <input
                      ref={passwordRef}
                      type={isPasswordShown ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="password"
                      required
                    />
                    <FontAwesomeIcon
                      role="button"
                      onClick={togglePasswordVisibility}
                      style={{ top: 35, right: 12 }}
                      className="position-absolute"
                      icon={isPasswordShown ? faEyeSlash : faEye }
                    ></FontAwesomeIcon>
                  </div>
                  <input type="submit" value="Log In" style={buttonStyle} />
                  <p className="text-start mt-2 mb-1 d-flex align-items-center">
                    Forget Password?{" "}
                    <button
                      onClick={resetPassword}
                      className="btn btn-link text-primary text-decoration-none"
                    >
                      Reset Password
                    </button>
                  </p>
                  {errorElement && errorElement}
                  {/* {loadingElement && loadingElement} */}
                  <p className="mb-2  text-start ">
                    New to Spaceland?
                    <Link
                      to="/register"
                      className="px-3 pointer text-decoration-none text-primary"
                    >
                      Please Register
                    </Link>
                  </p>
                  <SocialAccess />
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
