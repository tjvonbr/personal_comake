import React from 'react';
import { Icon } from 'semantic-ui-react';

function ListCard() { 
    return (
        <section className="list-card-wrapper">
            <div className="project-thumbnail">
                {/* <img src="" alt=""/> */}
            </div>
            <div className="project-descript">
                <p>Pothholes on Elton Lane</p>
                <address>Elton Lane</address>
                <p>The potholes are getting deeper!</p>
                <p>Anonymous Author</p>
            </div>
            <div>
                <span>
                    <Icon name="arrow up" />
                    <p>5 votes</p>
                </span>
            </div>
        </section>
    )
}

export default ListCard;