import React from 'react';
import './Item.css'

const Item = ({ image, title, description, link }) => {
    return (
        <div className="contenedor-item">
            <img src={image} alt={title} />
            <div className="texto-item">
                <br />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Item;
