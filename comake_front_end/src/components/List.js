import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListCard from './ListCard';
import FooterNav from './FooterNav';

function List(props) {
  const [currentUser, setCurrentUser] = useState({});
  const [issues, setIssues] = useState([]);
  
  useEffect(() => {
      let token = JSON.parse(localStorage.getItem('token'))
      let localId = JSON.parse(localStorage.getItem('id'))
      axios
        .get('https://co-make.herokuapp.com/issues', {
          headers: {
            Authorization: token
          }
         })
        .then( res => {
          // let thisUser = res.data.filter( user => user.id === localId )
          console.log(res.data)
          setIssues(res.data);
          
      })
        .catch( err => console.log("OH NO AN ERROR HAPPENED", err))
    },[])

  return (
    <ListWrapper>
      <UserWrapper>
        <UserInfo>Robert Downey</UserInfo>
        <UserAddress></UserAddress>
        <LocationWrapper>
            <LocationInfo></LocationInfo>
            <LocationInfo>Filter</LocationInfo>
            <LocationInfo>Sort by:</LocationInfo>
        </LocationWrapper>
      </UserWrapper>
  { issues.map( issue => <ListCard key={issue.id} data={issue}  /> )}
      <div className="footer-wrapper">
        <FooterNav />
      </div>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
`

const UserWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`

const UserInfo = styled.p`
  margin: 0px;
  padding-left: 150px;
  font-weight: bold;
  font-size: 18px;
`

const UserAddress = styled.address`
  padding-left: 150px;
  color: darkgray;
  font-size: 18px;
`

const LocationWrapper = styled.div`
  margin-top: 30px;
`

const LocationInfo = styled.p`
  margin: 0px;
  padding-left: 150px;
  padding-bottom: 10px;
  font-weight: bold;
`

export default List;