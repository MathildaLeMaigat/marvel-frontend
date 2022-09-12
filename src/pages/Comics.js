// Imports
import axios from "axios";
import { useState, useEffect } from "react";
import CardComics from "../components/CardComics";

const Comics = ({ handleFav2, fav }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    try {
      const fetchData = async () => {
        let skipData = (page - 1) * limit;
        const response = await axios.get(
          `https://marvel-backend-math.herokuapp.com/comics?limit=${limit}&skip=${skipData}&search=${search}`
        );
        // console.log("comics", response.data);
        setData(response.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      };

      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, [page, search, limit]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <h1>Comics</h1>
      <div className="box-search">
        <input
          className="searchBar"
          placeholder="Search for a comics..."
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
              elem={elem}
              fav={true}
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
        <p className="page-number">Page {page}</p>
        <button
          className="page-button"
          onClick={() => setPage(page + 1)}
          disabled={data.length < 100}
        >
          +
        </button>
        <select
          className="page-option"
          name="result"
          id="result"
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="10">10 per page</option>
          <option value="25">30 per page</option>
          <option value="50">70 per page</option>
        </select>
      </div>
    </div>
  );
};

export default Comics;
