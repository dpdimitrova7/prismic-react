import React from 'react';
import { RichText, linkResolver } from 'prismic-reactjs'

const Leader = ({ leader }) => {
 const title = RichText.asText(leader.name);

  return(
    <div>
      <h1>{title}</h1>
      <p>{leader.quote}</p>
      <img alt='cover' src={leader.exemplar_image.url} />          
      <RichText render={leader.description} linkResolver={linkResolver} />
    </div>
  )
}

export default Leader;