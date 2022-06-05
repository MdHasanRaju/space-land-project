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
          <div className="col-xl-7 col-lg-8 col-md-10 px-2">
            <div className="section-tittle text-center mb-4">
              <h2><span style={{color:"#a223f6"}}>MORE </span> CHARACTERS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {items?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 px-2">
            <div style={{border:'1px solid #7c48dc'}} className="single-blogs mb-3 pb-2">
              <div className="blog-img">
                <img
                  className=" rounded-2"
                  style={{maxHeight:'280px', width:'100%'}}
                  src={item.img}
                  alt="character-image"
                />
              </div>
              <div className="blogs-cap text-start px-2">
                <span >{item.name}</span>
                <h5 className="my-2">{item.origin}</h5>
                <p>
                {item?.desc?.slice(0, 100)}...
                </p>

                <Link className="text-decoration-none" to={`/character/${item.id}`}>
                  <button className="button"><span>See more</span></button>
                </Link>
                {/* <button
                  onClick={() => navigate(`/character/${item.id}`)}
                  className="button"
                >
                  <span>See More</span>
                </button> */}
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
