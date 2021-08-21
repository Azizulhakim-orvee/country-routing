import React from "react";
import { Link } from "react-router-dom";
import "./Countries.css";

const Countries = ({ country }) => {
  return (
    <div className="countries">
      <div>
        <h3>{country.name}</h3>
      </div>
      <Link to={`/details/${country.name}`}><button className='button'>Details</button></Link>
    </div>
  );
};

export default Countries;
