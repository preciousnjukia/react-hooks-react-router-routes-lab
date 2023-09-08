import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map((actors, index) => (
       <div key={index}>
         <h2 data-testid="actor-name">{actors.name}</h2>
         <p>Name: {actors.name}</p>
         <ul>
           {actors.movies.map((movies, moviesIndex) => (
             <li key={moviesIndex}>{movies}</li>
           ))}
         </ul>
       </div>
     ))}
    </div>
  );
}

export default Actors;
