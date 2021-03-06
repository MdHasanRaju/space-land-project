import React from "react";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowCircleRight,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import './Contact.css';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate()
  const bgStyle = {
    backgroundColor: "#da22ff",
  };

  const textStyle = {
    color: "#9733ee",
  };

  
  
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-sm-12 text-center mb-4">
          <button onClick={() => navigate('/about')} className="button" >
            <span>
              Visit Us
            </span>
          </button>
        </div>
        <div className="col-sm-12 mb-4 col-md-5">
          <div style={{border:'1.5px solid #a223f6',}}  className="card ">
            <div className="card-header p-0 m-0">
              <div style={{backgroundColor:'#a223f6'}} className=" text-white text-center py-2">
                <h3>
                  <i className="fa fa-envelope"></i> Write to us:
                </h3>
                <p className="m-0">
                  We’ll write rarely, but only the best content.
                </p>
              </div>
            </div>
            <div className="card-body p-3">
              <div className="form-group text-start">
                <label style={{color:"#7c48dc", fontWeight:'bold'}}> Your name </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="data[name]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="form-group text-start my-1">
                <label style={{color:"#7c48dc", fontWeight:'bold'}}>Your email</label>
                <div className="input-group mb-2 mb-sm-0">
                  <input
                    type="email"
                    name="data[email]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group text-start">
                <label style={{color:"#7c48dc", fontWeight:'bold'}}>Subject</label>
                <div className="input-group mb-2 mb-sm-0">
                  <input
                    type="text"
                    name="data[subject]"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="form-group mt-1 mb-4 text-start">
                <label style={{color:"#7c48dc", fontWeight:'bold'}}>Message</label>
                <div className="input-group  mb-sm-0">
                  <input type="text" className="form-control" name="(mesg" />
                </div>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  name="submit"
                  value="submit"
                  style={{backgroundColor:'#a223f6'}}
                  className="btn text-light btn-block w-100 rounded-0 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-7">
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.869507132886!2d90.48928244973479!3d23.716353595919365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b655bf06207f%3A0x1f95e2008863e33d!2sHazi%20Moazzem%20Ali%20High%20School!5e0!3m2!1sen!2sbd!4v1654141184316!5m2!1sen!2sbd"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              loading="lazy"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <a
                href="#"
                style={bgStyle}
                className="px-3 py-2 rounded text-white mb-2 d-inline-block"
              >
                <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
              </a>
              <p> Demra ,Dhaka </p>
            </div>
            <div className="col-md-4">
              <a
                href="#"
                style={bgStyle}
                className="px-3 py-2 rounded text-white mb-2 d-inline-block"
              >
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </a>
              <p>+880- 1517140853</p>
            </div>
            <div className="col-md-4">
              <a
                href="#"
                style={bgStyle}
                className="px-3 py-2 rounded text-white mb-2 d-inline-block"
              >
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </a>
              <p> mdhasanraju2017@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
