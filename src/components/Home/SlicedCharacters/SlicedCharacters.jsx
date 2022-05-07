import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SlicedCharacters = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./finalspaceapi.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data?.slice(0, 6));
      });
  }, []);

  return (
    <section class="home-blog">
      <div class="container">
        <div class="row justify-content-center">
          <div class="cl-xl-7 col-lg-8 col-md-10 px-2">
            <div class="section-tittle text-center mb-4">
              <h2>More Characters</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {items?.map((item, index) => (
            <div key={index} class="col-lg-4 col-md-6 col-sm-6 px-2">
              <div class="single-blogs mb-3">
                <div class="blog-img">
                  <img className=" rounded-2" width="100%" src={item.img} alt="character-image" />
                </div>
                <div class="blogs-cap text-start">
                  <span>{item.name}</span>
                  <h5>{item.origin}</h5>
                  <p>
                    Consectetur adipisicing elit. Laborum fuga incidunt
                    laboriosam voluptas iure, delectus..
                  </p>
                  <Link className="btn btn-primary " to={`/character/${item.id}`}>
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

export default SlicedCharacters;
