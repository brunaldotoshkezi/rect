import React from 'react';

import "./card.styles.css";

export const Card = props =>(
    <div className="card-container">
        <img alt="moster" src={`https://robohash.org/${props.moster.id}?set=set2&size=180x180`} />
        <h2>{props.moster.name}</h2>
        <p>{props.moster.name}</p>
        <p>{props.moster.email}</p>
    </div>
);