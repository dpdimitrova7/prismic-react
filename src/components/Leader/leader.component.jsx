import React, { useState } from 'react';
import { RichText } from 'prismic-reactjs';
import './leader.styles.scss';

const Leader = ({ leader }) => {
  return(
    <div className='wrapper-grid'>
      <div className='align-exemplar-quote-image'>
        <div className='wrap-exemplar-quote'>
          <h3 className='exemplar'>{leader.exemplar}</h3>
          <p className='quote'>{leader.quote}</p>
        </div>    
        <img className='img' alt='cover' src={leader.exemplar_image.url}/>
      </div>
      <p style={{fontWeight: `400`}}>{RichText.render(leader.description)}</p>
    </div>
    )
}

export default Leader;