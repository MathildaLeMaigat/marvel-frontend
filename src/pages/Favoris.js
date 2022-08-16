// Imports
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favoris = () => {
  return (
    <h1>
      Your Favorites{" "}
      <div className="fav-icone">
        <FontAwesomeIcon icon="heart" />
      </div>
    </h1>
  );
};

export default Favoris;
