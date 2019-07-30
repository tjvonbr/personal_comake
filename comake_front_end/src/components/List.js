import React from 'react';
import ListCard from './ListCard';

function List() {
    return (
        <section className="list-header-wrapper">
            <div className="user-thumbnail">
                <embed src="../images/trevor_thumbnail.svg" type="Profile Thumbnail"/>
            </div>
            <div className="user-info">
                <p>Robert Downey</p>
                <address>30 John Morris Road</address>
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