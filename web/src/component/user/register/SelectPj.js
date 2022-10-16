import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pjs from "../../../data/pjStats";

function SelectPj() {
  const [pj, setPj] = useState([]);
  useEffect(() => {
    setPj(pjs);
  }, []);
  return (
    <div className="form-check d-flex">
{pj.map((p) =>(
  <li key={p.name}>
  <input className="form-check-input" type="radio" name="exampleRadios" id={p.name} value={p.name} checked/>
  <label className="form-check-label" htmlFor={p.name}>
  <Link key={p.name} to={`/pj/${p.id}`}> <img src={p.image} alt="imagen" width="240" height="160px" /> {p.name}</Link>
  </label>
  </li>
))}
</div>

  );
}

export default SelectPj;
