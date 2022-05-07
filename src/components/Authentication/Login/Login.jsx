import React, { useRef } from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "./../../../assets/images/5.png";
import { Link} from "react-router-dom";

const Login = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <img width='100%' height='100%' src={img} alt="Image" className="" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4 text-start">
                  <h3>
                    Login to <strong style={{color:'#a223f6'}}>Spaceland</strong>
                  </h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                    consectetur adipisicing.
                  </p>
                </div>
                <form onSubmit={handleSubmit} method="post">
                  <div className="form-group first text-start ">
                    <label htmlFor="useremail">Email</label>
                    <input ref={emailRef} type="email" className="form-control" id="useremail" required/>
                  </div>
                  <div className="form-group last my-4 text-start">
                    <label htmlFor="password">Password</label>
                    <input
                      ref={passwordRef}
                      type="password"
                      className="form-control"
                      id="password"
                      required
                    />
                  </div>
                  <div className="d-flex mb-4 align-items-center">
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
                      <a href="#" className="forgot-pass">
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
                  <Link to='/register' style={{ fontSize: "17px !important" }} className="ms-3 pointer text-decoration-none">
                    Please Register
                  </Link></p>
                  <span style={{ fontSize: "17px !important" }} className="d-block text-start my-3 text-muted">
                    or sign in with
                  </span>
                  <div className="social-login d-flex justify-content-between">
                    <button  style={{ width: "49%" }} className="btn btn-primary text-light rounded  px-5">
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </button>
                    <button  style={{ width: "49%" }} className="btn btn-primary text-light rounded  px-5">
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

export default Login;
