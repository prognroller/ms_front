import React from "react";
import Image from "./Image";
import {Link} from "react-router-dom";

export default function Recipe({id, title, photo}) {
  return(
    <article className="recipe" >
      {
        photo &&
        <Link to={`/recipes/${id}`} >
          <Image image={photo} />
          <h3>{title}</h3>
        </Link>
      }
    </article>
  )
}