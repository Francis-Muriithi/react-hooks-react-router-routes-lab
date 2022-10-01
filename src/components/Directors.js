import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
   <h1>Directors Page</h1>
    {directors.map(({name, movies})=>(
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
     </div>
}

export default Directors;
