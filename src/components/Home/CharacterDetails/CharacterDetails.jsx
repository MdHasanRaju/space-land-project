import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SlicedCharacters from "../SlicedCharacters/SlicedCharacters";
import "./CharacterDetails.css";

const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch("/finalspaceapi.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data?.find((char) => char.id == characterId);
        setCharacter(updatedData);
        console.log(character);
      });
  }, []);

  return (
    <div
      style={{
        background: "#F6F6F6",
        paddingTop: "50px",
        paddingBottom: "29px",
      }}
    >
      <div className="container">
        <Row>
          <Col lg="5" md="5" xs="12" className="">
            <img
              style={{ width: "100%", height: "85%" }}
              src={character.img}
              alt="character-image.png"
            />
          </Col>
          <Col className="text-start" lg="7" md="7" xs="12">
            <h5 className="mt-3 text-uppercase">
              <span className="title-color">Name:</span> {character.name}
            </h5>
            <p className="mt-4">{character?.desc?.slice(0, 550)},,</p>
            <h6 className="mb-3 mt-5 pt-3  text-uppercase">
              <span className="title-color">Origin</span>: {character.origin}
            </h6>
            <h6 className="mb-5  text-uppercase">
              <span className="title-color">Status</span>: {character?.status? character.status : 'not found'}
            </h6>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CharacterDetails;
