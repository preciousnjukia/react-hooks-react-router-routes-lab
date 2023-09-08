import React from "react";
import { directors } from "../data";

function Directors() {
  return (
   <div>
     <h1>Directors Page</h1>
     {directors.map((director, index) => (
        <div key={index}>
          <h2 data-testid="director-name">{director.name}</h2>
          <p>Name: {director.name}</p>
          <ul>
            {director.movies.map((movies, moviesIndex) => (
              <li key={moviesIndex}>{movies}</li>
            ))}
          </ul>
        </div>
      ))}
     </div>
  );
}

export default Directors;
