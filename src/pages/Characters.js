// Imports
import axios from "axios";
import { useState, useEffect } from "react";

import CardHero from "../components/CardHero";

const Characters = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Requete
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-backend-math.herokuapp.com/characters`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>Marvel's characters</h1>
      <div className="container-card">
        {data.results.map((character, index) => {
          return (
            <CardHero
              key={character._id}
              name={character.name}
              description={character.description}
              photo={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              id={character._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
