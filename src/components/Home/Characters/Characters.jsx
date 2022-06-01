import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Characters.css";

const Characters = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./finalspaceapi.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <section className="home-blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="cl-xl-7 col-lg-8 col-md-10 px-2">
            <div className="section-tittle text-center mb-4">
              <h2>Characters Bio</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {items?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 px-2 ">
              <div className="single-blogs border border-dark mb-3">
                <div className="blog-img">
                    <img width="100%" src={item.img} alt="character-image" />
                </div>
                <div className="blogs-cap text-start">
                  <span>{item.name}</span>
                  <h5>{item.origin}</h5>
                  <p>
                    Consectetur adipisicing elit. Laborum fuga incidunt
                    laboriosam voluptas iure, delectus..
                  </p>
                  <Link
                    className="btn btn-primary "
                    to={`/character/${item.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
