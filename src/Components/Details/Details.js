import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Details.css";

const Details = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data?.[0]);
        setLoading(false);
      });
  }, []);
  const { callingCodes, capital, region, subregion } = details;

  const data = (
    <div class="container">
      <h1>Details of {name}</h1>
      <h3>Calling Codes: {callingCodes} </h3>
      <h3>Capital: {capital} </h3>
      <h3>Region: {region}</h3>
      <h3>Subregion: {subregion} </h3>
      <Link to="/home">
        <button>Go Back</button>
      </Link>
    </div>
  );

  const data_2 = (
    <div class="container">
      <h1>Details of Loading...</h1>
      <h3>Calling Codes: Loading... </h3>
      <h3>Capital: Loading... </h3>
      <h3>Region: Loading...</h3>
      <h3>Subregion: Loading... </h3>
      <Link to="/home">
        <button>Go Back</button>
      </Link>
    </div>
  );

  return <div>{loading ? data_2 : data}</div>;
};

export default Details;
