import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(({name, movies})=>(
      <div key={name}>
        <h2>{name}</h2>
        <ul>
          <li>{movies[0]}</li>
          <li>{movies[1]}</li>
          <li>{movies[2]}</li>
          <li>{movies[3]}</li>
        </ul>
    </div>
     ))}
  </div>;
}

export default Actors;
