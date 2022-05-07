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
    <section class="home-blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="cl-xl-7 col-lg-8 col-md-10 px-2">
            <div class="section-tittle text-center mb-4">
              <h2>Characters Bio</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {items?.map((item, index) => (
            <div key={index} class="col-lg-4 col-md-6 col-sm-6 px-2 ">
              <div class="single-blogs border border-dark mb-3">
                <div class="blog-img">
                    <img width="100%" src={item.img} alt="character-image" />
                </div>
                <div class="blogs-cap text-start">
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
