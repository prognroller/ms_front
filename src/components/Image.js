import React from 'react'

export default function Image({image, width = 436, height = 290}) {
  const link = `${image.url}?w=${width}&h=${height}&fit=fill&fm=webp`

  return(
    <picture>
      <source srcSet={link} type='image/webp'/>
      <img src={link} role='presentation' alt={image.description || image.title}/>
    </picture>
  )
}