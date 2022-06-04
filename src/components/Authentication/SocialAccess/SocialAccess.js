import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import auth from "../Firebase/Firebase.init";

const SocialAccess = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return navigate(from, { replace: true });
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const buttonStyle = {
    width: "100%",
    backgroundColor:'#a223f6',
    border:'none',
    padding:'5px 0',
    borderRadius:'5px',
    color:'white'

  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1.5px" }} className="bg-secondary w-50"></div>
        <p className="px-1 mt-2">OR</p>
        <div style={{ height: "1.5px" }} className="bg-secondary w-50"></div>
      </div>
      {/* {loadingElement && loadingElement} */}
      {errorElement && errorElement}
      <div>
        <div className="social-login d-flex justify-content-between">
          <button
            onClick={handleGoogleSignIn}
            style={buttonStyle}
          >
            {" "}
            Sign in with google
            <FontAwesomeIcon className="ms-1" icon={faGoogle}></FontAwesomeIcon>
          </button>
          {/* <button
                      style={{ width: "49%" }}
                      className="btn btn-light text-info rounded  px-5"
                    >
                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default SocialAccess;
