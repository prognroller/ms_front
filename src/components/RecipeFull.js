import React from 'react'
import Image from "./Image";

export default function RecipeFull({description, photo, title}) {
  return(
    <section className="recipe-full">
      <h2>{title}</h2>
      <p>{description}</p>
      { photo && <Image image={photo} /> }
    </section>
  )
}