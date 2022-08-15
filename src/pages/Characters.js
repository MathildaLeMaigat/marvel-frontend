// Imports
import axios from "axios";
import { useState, useEffect } from "react";

import CardHero from "../components/CardHero";

const Characters = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();

  // Requete
  useEffect(() => {
    try {
      const fetchData = async () => {
        let skipData = (page - 1) * 100;
        const response = await axios.get(
          `https://marvel-backend-math.herokuapp.com/characters?&limit=100&skip=${skipData}&search=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, [page]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <h1>Marvel's Characters</h1>
      {/* <input placeholder="Search for a character" type="text" value={search} /> */}
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
      <div className="pagination">
        <button
          className="page-button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          -
        </button>
        <p className="page-number">{page}</p>
        <button
          className="page-button"
          onClick={() => setPage(page + 1)}
          disabled={data.length < 100}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Characters;
