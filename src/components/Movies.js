import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map(({title, time, genres})=>(
      <div key={title}>
        <h2>{title}</h2>
        <h3>{time}</h3>
        <ul>
          <li>{genres[0]}</li>
          <li>{genres[1]}</li>
          <li>{genres[2]}</li>
          <li>{genres[3]}</li>
          <li>{genres[4]}</li>
        </ul>
    </div>
     ))}
  </div>;
}

export default Movies;
