import React, { useState, useEffect} from 'react';
import './App.css';
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'
import { client } from './client';
import Leader from './components/leader-component'


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

 /* function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    } else if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid;
    }
  
    // Default to homepage
    return '/';
  }*/

  const leaders = Object.assign({}, doc.data)

  return (
    <React.Fragment>
      {
       leaders.types ? (
        leaders.types.map((leader, i) => {
          {console.log(leader.quote)}
          return <Leader leader={leader} key={i}></Leader>
          })
        ) : <p>Loading...</p>
      }
    </React.Fragment>
  )
}


export default App;
