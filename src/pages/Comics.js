// Imports
import axios from "axios";
import { useState, useEffect } from "react";
import CardComics from "../components/CardComics";

const Comics = ({ handleFav2 }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        let skipData = (page - 1) * 100;
        const response = await axios.get(
          `https://marvel-backend-math.herokuapp.com/comics?&limit=100&skip=${skipData}&search=${search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };

      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, [page, search]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <h1>Comics</h1>
      <div className="box-search">
        <input
          className="searchBar"
          placeholder="Search for a comics"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            // setPage(1);
          }}
        />
        <span className="count">
          <span className="count-span">{data.count}</span> characters found
        </span>
      </div>
      <div className="container-card">
        {data.results.map((elem, index) => {
          return (
            <CardComics
              // handleFav2={handleFav2}
              key={elem._id}
              name={elem.title}
              description={elem.description}
              photo={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              id={elem._id}
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

export default Comics;
