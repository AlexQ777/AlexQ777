import Header from "./components/Encabezado";
import Footer from "./components/Footer";
import './Técnicaturas.css'
import electronic from "./components/img/electronic.jpg";
import mecanic from "./components/img/mecanic.jpg";

function Tecnicaturas(){
    return(
        <div className="tecnicaturas">
            <Header/>
            <div className="content-tec">
                <div className="introduccion-tec">
                    <h2>Descrubre nuestras tecnicaturas</h2>
                    <br></br>
                    <p>
                        En la Escuela Ingeniero Villanueva, ofrecemos una variedad de técnicaturas diseñadas 
                        para preparar a nuestros estudiantes con los conocimientos y habilidades necesarios 
                        para sobresalir en el mundo profesional.
                    </p>
                    <p>
                        Nuestras tecnicaturas combinan una sólida formación teórica con una práctica intensiva, 
                        abordando áreas claves en la tecnología y la ingeniería. Con un enfoque en la 
                        resolución de problemas reales y el desarollo de competencias de técnicas avanzadas, 
                        nuestros programas buscan formar profesionales altamente capacitados y listos para 
                        enfrentar desafíos del sector.
                        
                    </p>
                    <p>
                        Explora nuestras opciones educativas y encuentra tu camino ideal para tu futuro 
                        profesional.
                    </p>
                </div>
                <div className="electronica">
                    <img src={electronic} alt='electronica'/>   
                    <div className="texto-electronica">
                        <br/>
                        <h2>ELECTRÓNICA</h2>
                        <p>Técnico en Electrónica con Orientación en Automatización y Control Industrial"</p>
                        <br/>
                        <div className="link">
                            <a href="http://localhost:5173/Electr%C3%B3nica">VER MÁS</a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="electromecanica">
                    <div className="texto-electromecanica">
                        <br/>
                        <h2>ELECTROMECÁNICA</h2>
                        <p>Técnico en equipos e instalaciones electromecánicas</p>
                        <br/>
                        <div className="link">
                            <a href="http://localhost:5173/Electromec%C3%A1nica">VER MÁS</a>
                        </div>
                        <br/>
                    </div>
                    <img src={mecanic} alt='Electromecánica'/>
                </div>
            </div>
            <br/>
            <br/>
            <Footer/>
        </div>
    );
}

export default Tecnicaturas;