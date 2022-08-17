import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardComics from "../components/CardComics";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-backend-math.herokuapp.com/comics/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log({ error: error.message });
    }
  }, [id]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <h1>{data.name}</h1>
      <div className="topContainer">
        <div className="cardv2">
          <img
            className="hero-img"
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt="img character"
          />
          <div className="descriptionCharac">
            {data.description ? (
              <div className="descriptionCharac">{data.description}</div>
            ) : (
              <p className="descriptionCharac">No description</p>
            )}
          </div>
        </div>
      </div>
      <h2>You can find {data.name} in :</h2>
      <div className="container-card">
        {data.comics.map((elem, index) => {
          return (
            <CardComics
              key={elem._id}
              name={elem.title}
              description={elem.description}
              photo={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
              id={elem._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Character;
