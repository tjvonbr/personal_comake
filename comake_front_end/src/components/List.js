import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListCard from './ListCard';

function List(props) {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
      axios
        .get('https://co-make.herokuapp.com/issues')
        .then(response => {
          console.log('Comake Projects:', response.data.results)
          setCurrentUser(response.data.results)
        })
        .catch(error => {
          console.log('Sorry.  The API is not able to give you the data right now.', error)
        });
  }, [])

  return (
    <section className="list-header-wrapper">
      <div className="user-thumbnail">
          <embed src="../images/trevor_thumbnail.svg" type="Profile Thumbnail"/>
      </div>
      <div className="user-info">
          <p>Robert Downey</p>
          <address>30 John Morris Road</address>
          <address></address>
      </div>
      <div className="user-location">
          <p>Issues in Tarrytown, Austin</p>
          <p>Filter</p>
          <p>Sort by:</p>
      </div>
      <ListCard />
    </section>
  )
}

export default List;