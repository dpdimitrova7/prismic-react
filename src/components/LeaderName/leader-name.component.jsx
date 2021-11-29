import React from 'react';
import { RichText } from 'prismic-reactjs';
import './leader-name.styles.scss'

function LeaderName({ leader }) {
  return (
    <div className="name-wrapper" style={{backgroundColor: `${leader.colour}`}}>
      <h1 className='leader-name'>{RichText.asText(leader.name)}</h1>
    </div>
  );
}

export default LeaderName;