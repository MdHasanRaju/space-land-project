import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDribbble,
  faTwitter,
  faLinkedin,
  faPinterest,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // #480048

  const bgColor = {
    // backgroundColor:'#7c48dc'
    backgroundColor:'#a223f6'
  }

  return (
    <div style={bgColor} className="p-2">
        <footer className="text-white text-center text-lg-start">
          <div className="container">
            <div className="row mt-4">
              <div className="col-lg-4 col-sm-6 mb-4 mb-md-0 px-2">
                <h5 className="text-uppercase mb-4">SpaceLand</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div className="mt-4">
                  <a
                    type="button"
                    className="text-light p-2 rounded fs-2 me-2"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>

                  <a
                    type="button"
                    className="text-light p-2 rounded fs-2 me-2"
                  >
                    <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
                  </a>
                  <a
                    type="button"
                    className="text-light p-2 rounded fs-2 me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                  <a
                    type="button"

                    className="text-light p-2 rounded fs-2 me-2"
                  >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0 px-2">
                <h5 className="text-uppercase mb-4 pb-1">Search something</h5>

                <div className="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" htmlFor="formControlLg">
                    Search
                  </label>
                </div>

                <ul className="fa-ul " style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </span>
                    <span className="ms-2">Dhaka, 1361, Bangladesh</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <span className="ms-2">mdhasanraju2017@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <span className="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-sm-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">inquiry hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            © 2022 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              spaceland.com
            </a>
          </div>
        </footer>
      
    </div>
  );
};

export default Footer;
