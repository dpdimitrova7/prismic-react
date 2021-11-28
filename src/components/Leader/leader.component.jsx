import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import './leader.styles.scss';

const Leader = ({ leader }) => {
  //const [viewed, setViewLeader] = useState(false);
 const description = RichText.asText(leader.description);
//I will have state that will change on click


  return(
    <div className='wrapper-grid'>
        <p className="quote">{leader.quote}</p>
        <img alt='cover' style={{maxWidth: '250px'}} src={leader.exemplar_image.url}/>
        <p>{description}</p>
    </div>
    )
}

export default Leader;