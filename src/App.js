import React, { useState, useEffect} from 'react';
import './App.css';
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-reactjs'
import { client } from './client';
import Leader from './components/Leader/leader.component';
import LeaderName from './components/LeaderName/leader-name.component';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const App = () => {
  const [doc, setDocData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.query(
          Prismic.Predicates.at('document.type', 'leader-types')
      )
      if (response) {
        return setDocData(response.results[0])
      }}
      catch(error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])


  const leaders = Object.assign({}, doc.data)

  return (
    <Timeline lineColor={'#5d5c61'}>
      {
       leaders.types ? (
        leaders.types.map((leader, i) => {
          return (
          <TimelineItem key={i}
          dateComponent={<LeaderName leader={leader} />}
          style={{ color: '#e86971' }}><Leader leader={leader} key={i} /></TimelineItem>
          )
          })
        ) : <p>Loading...</p>
      }
    </Timeline>
  )
}


export default App;
