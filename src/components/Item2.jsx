import React from 'react';
import './Item2.css'

const Item2 = ({ title, description, link, image }) => {
    return (
        <div className="contenedor-item2">
            <div className="texto-item2">
                <br />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img src={image} alt={title} />
        </div>
    );
};

export default Item2;

