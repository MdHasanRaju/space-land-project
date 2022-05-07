import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { characterId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch("/finalspaceapi.json")
      .then((res) => res.json())
      .then((data) => {
          const updatedData = data?.find((char) => char.id == characterId);
          setCharacter(updatedData);
      });
  }, []);
  
  return (
    <div>
      <h2>character id is: {character.id}</h2>
    </div>
  );
};

export default CharacterDetails;
