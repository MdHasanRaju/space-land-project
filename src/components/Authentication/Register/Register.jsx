import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import img from "./../../../assets/images/login2.png";
import auth from "../Firebase/Firebase.init";
import SocialAccess from "../SocialAccess/SocialAccess";
import Loading from "../../Shared/Loading/Loading";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    if (!isPasswordShown) {
      setIsPasswordShown(true);
      return;
    }
    setIsPasswordShown(false);
  };

  const [createUserWithEmailAndPassword, user, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const agree = e.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(name, email, password, "profile updated");
    // navigate('/');
    navigate(from, { replace: true });
  };

  let errorElement;
  if (emailError) {
    errorElement = <p className="text-danger">Error: {emailError.message}</p>;
  }

  // let loadingElement;
  if (emailLoading || updating) {
    return <Loading />;
  }

  if (user) {
    console.log("user:", user);
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
                  Welcome to Space Land. Here you will be able to get a lot of information about alien.
                  </p>
                </div>
                <form onSubmit={handleSubmit} method="post">
                  <div className="form-group first text-start ">
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                      required
                    />
                  </div>
                  <div className="form-group first text-start">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="form-group last  text-start position-relative">
                    <label htmlFor="password">Password</label>
                    <input
                      className="form-control"
                      type={isPasswordShown ? "text" : "password"}
                      id="password"
                      placeholder="password"
                      required
                    />
                    <FontAwesomeIcon
                      role="button"
                      onClick={togglePasswordVisibility}
                      style={{ top: 35, right: 12 }}
                      className="position-absolute"
                      icon={isPasswordShown ? faEyeSlash : faEye}
                    ></FontAwesomeIcon>
                  </div>

                  <div className="form-group d-flex justify-content-start align-items-center my-2">
                    <input
                      onClick={() => setAgree(!agree)}
                      type="checkbox"
                      name="terms"
                      id="terms"
                      required
                    />
                    <label
                      className={` ${agree ? "" : "text-danger"} ps-2`}
                      htmlFor="terms"
                    >
                      Accept spaceland terms and conditions
                    </label>
                  </div>
                  <input
                    disabled={!agree}
                    type="submit"
                    value="Register"
                    style={
                      !agree
                        ? {
                            width: "100%",
                            backgroundColor: "lightGray",
                            padding: "5px 0",
                            borderRadius: "5px",
                            border: "none",
                            color: "black",
                          }
                        : buttonStyle
                    }
                  />
                  {errorElement && errorElement}
                  {/* {loadingElement && loadingElement} */}
                  <p className="mb-2 mt-2 text-start ">
                    Already have an account?
                    <Link
                      to="/login"
                      className="ms-3 text-primary text-decoration-none"
                    >
                      Please Login
                    </Link>
                  </p>
                  <SocialAccess />
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
