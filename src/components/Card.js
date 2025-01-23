import React from 'react';

export function Card(props) {
    return (
        <div className="container">
            <h3 className="heading">{props.title}</h3>
            <img src={props.image} alt={props.alt} className="image" />
            <p className="paragraph">{props.description}</p>
            <p className="price">{props.price}</p>
            <button className="btn">{props.buttonText}</button>
        </div>
    );
}