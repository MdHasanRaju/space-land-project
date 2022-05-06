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
  return (
    <div className="bg-dark">
      <div class="container">
        <footer class="text-white text-center text-lg-start bg-dark">
          <div class="container p-4">
            <div class="row mt-4">
              <div class="col-lg-4 col-sm-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">SpaceLand</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div class="mt-4">
                  <a type="button" class="btn btn-floating btn-light btn-lg me-2">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>

                  <a type="button" class="btn btn-floating btn-light btn-lg me-2">
                    <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
                  </a>
                  <a type="button" class="btn btn-floating btn-light btn-lg me-2">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                  <a type="button" class="btn btn-floating btn-light btn-lg me-2">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="formControlLg">
                    Search
                  </label>
                </div>

                <ul class="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li class="mb-3">
                    <span class="fa-li">
                      <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                    </span>
                    <span class="ms-2">Dhaka, 1361, Bangladesh</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                    <span class="ms-2">mdhasanraju2017@gmail.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    </span>
                    <span class="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-sm-12 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">inquiry hours</h5>

                <table class="table text-center text-white">
                  <tbody class="fw-normal">
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

          <div
            class="text-center p-3"
          >
            © 2022 Copyright: 
            <a class="text-white" href="https://mdbootstrap.com/">
            spaceland.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
