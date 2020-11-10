import React from 'react'
import Image from "./Image";

export default function RecipeFull({description, photo, title, chef, tagsCollection}) {
  return(
    <section className="recipe-full">
      <h2>{title}</h2>
      <p>{description}</p>
      { photo && <Image image={photo} /> }
      { chef && <p>{chef.name}</p> }
      {
        <ul className="recipe-tags">
          {
            tagsCollection && tagsCollection.items.map((tag, idx) => (
              <li key={idx} className="recipe-tag">{tag.name}</li>)
            )
          }
        </ul>
      }
    </section>
  )
}