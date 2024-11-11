import './Footer.css'
import insta from '/insta.svg'
import face from '/Face.svg'


const Footer=()=>{
    return(
        <div className="footer">
            <div className='del-lado-izquierdo'>
                <h3>Contactanos:</h3>
                <p>J. A. Maza 737, Maipú, Mendoza</p>
                <p>0261 481 3500</p>
                 <p>dge4108@mendoza.edu.ar</p>
            </div>
            <div className='del-lado-derecho'>
                <a href="https://www.instagram.com/esc_guillermo_villanueva/" target="_blank">
                    <img src={insta} className='logo' alt="logo instagram"/>
                </a>
                <a href="https://www.facebook.com/p/Escuela-N-4-108-Ingeniero-Guillermo-Villanueva-100066696623213/?locale=es_LA" target="_blank">
                    <img src={face} className='logo' alt="logo facebook"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;