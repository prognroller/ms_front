import React from "react";
import Image from "./Image";
import {Link} from "react-router-dom";

export default function Recipe({id, name, photo}) {
  return(
    <article className="recipe" >
      {name}
      {
        photo &&
        <Link to={`/recipes/${id}`} >
          <Image image={photo} />
        </Link>
      }
    </article>
  )
}