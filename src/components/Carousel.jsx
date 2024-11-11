import React, { useEffect} from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel  from 'embla-carousel-react'
import escola from './img/escola.jpg'
import pipipi from './img/pipipi.jpg'
import idk from './img/idk.jpg'
import './Carousel.css'

function EmblaCarousel (){
    const[emblaReft]=useEmblaCarousel({loop:false}, [Autoplay({delay: 5000})])

    return(
        <div className='embla' ref={emblaReft}>
            <div className='emblacontainer'>
                <div className='emblaslide'><img src={escola} alt='Chikers' /></div>
                <div className='emblaslide'><img src={idk} alt='Chikers' /></div>
                <div className='emblaslide'><img src={pipipi} alt='Chikers' /></div>
            </div>
        </div>
    )
}

export default EmblaCarousel;

