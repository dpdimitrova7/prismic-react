import React from 'react';
import { RichText } from 'prismic-reactjs';
import './leader-name.styles.scss'

function LeaderName({leader}) {
  return (
    <div className="name-wrapper">
      <h1 className='leader-name' style={{color: `${leader.colour}`}, {fontSize:`1em`}}>{RichText.asText(leader.name)}</h1>
    </div>
  );
}

export default LeaderName;