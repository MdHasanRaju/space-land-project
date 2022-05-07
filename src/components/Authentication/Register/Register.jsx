import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import img from "./../../../assets/images/3.png";

const Register = () => {

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img src={img} width="100%" height="100%" alt="Image" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4 text-start">
                  <h3>
                    Sign up to
                    <strong style={{ color: "#a223f6" }}> Spaceland</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form action="#" method="post">
                <div className="form-group first text-start ">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group first text-start">
                    <label htmlFor="username">Email</label>
                    <input type="email" className="form-control" id="useremail" />
                  </div>
                  <div className="form-group last  text-start">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <input
                        style={{ height: "14px", width: "20px" }}
                        className="mt-2"
                        type="checkbox"
                        checked=""
                      />
                      <span
                        style={{ fontSize: "17px !important" }}
                        className=""
                      >
                        Remember me{" "}
                      </span>
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ms-auto">
                      <a href="#" className="forgot-pass text-dark">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn text-white w-100 btn-primary"
                  />
                  <p className="mb-4 mt-2 text-start ">New user in Spaceland? 
                  <Link to='/login' style={{ fontSize: "17px !important" }} className="ms-3 text-dark text-decoration-none">
                    Please Login
                  </Link></p>
                  <span
                    style={{ fontSize: "17px !important" }}
                    className="d-block text-start my-4 text-muted"
                  >
                    or sign in with
                  </span>
                  <div className="social-login d-flex justify-content-between">
                    <button
                      style={{ width: "49%" }}
                      className="btn btn-light text-info rounded  px-5"
                    >
                      <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </button>
                    <button
                      style={{ width: "49%" }}
                      className="btn btn-light text-info rounded  px-5"
                    >
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
