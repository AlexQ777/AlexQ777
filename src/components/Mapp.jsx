import React from 'react';
import './Mapp.css'; 

const Mapp = () => {
    return (
        <div className="map-container">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3347.076960387564!2d-68.795346!3d-32.9753713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0c91277d152d%3A0xdf3bed9223aca63f!2sEscuela%20N%C2%B0%204-108%20Ingeniero%20Guillermo%20Villanueva!5e0!3m2!1ses!2sar!4v1730077753777!5m2!1ses!2sar" 
                className="responsive-map"
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Mapp;