import Header from "./components/Encabezado";
import Mapp from "./components/Mapp";
import Footer from "./components/Footer";
import Modal from "./components/Modal"
import React,{useState} from "react";
import './institución.css';
import electronicYearsData from "./components/data/M-Electronica";
import electromechanicalYearsData from "./components/data/M-Electromecanica"
import yearsData from "./components/data/M-Ciclo-basico";
import escue from "./components/img/escue.jpg"

function Institucion() {
    const[estadoModal1,cambiarEstadoModal1] = useState(false);
    const[estadoModal2,cambiarEstadoModal2] = useState(false);
    const[estadoModal3,cambiarEstadoModal3] = useState(false);
    return (
        <div className="institucion-i">
            <Header />
            <div className="content-i">
                <div className="quienes-somos">
                    <img src={escue}/>
                    <h1>4108 - ING. GUILLERMO VILLANUEVA</h1>
                    <br/>
                    <h2>¿Quiénes somos?</h2>
                    <p>
                        En la Escuela Ingeniero Guillermo Villanueva 4-108, nos enorgullece formar generaciones de 
                        estudiantes con un compromiso firme hacia la excelencia académica, el desarrollo integral y 
                        la responsabilidad social. Somos una institución educativa con un legado de más de 70 años 
                        de experiencia, dedicados a brindar una formación de calidad que impulsa el crecimiento 
                        personal y profesional de nuestros alumnos.
                    </p>
                    <p>
                        Nuestra escuela cuenta con un equipo docente altamente capacitado y una infraestructura 
                        moderna, diseñada para fomentar un ambiente de aprendizaje dinámico y colaborativo. A través 
                        de una educación integral, promovemos no solo el conocimiento académico, sino también valores 
                        como el respeto, la perseverancia y el trabajo en equipo, preparándolos para enfrentar los 
                        retos del mundo actual.
                    </p>
                </div>
                <div className="ayufanose">
                    <div className="plan-i">
                        <h1>Plan de estudio</h1>
                        <div className="plan-sections">
                            <div className="carreras">
                                <h2>Carreras</h2>
                                <p>Ciclo Básico Secundario Técnico</p>
                                <p>SECTOR ELECTRÓNICO</p>
                                <p>SECTOR ELECTROMECÁNICO</p>
                            </div>
                            <div className="plan-estudio">
                                <h2>Plan de estudio</h2>
                                <div className="button-container">
                                <button className="button" onClick={() => cambiarEstadoModal2(!estadoModal2)}>Materias</button>
                                    <Modal estado={estadoModal2} cambiarEstado={cambiarEstadoModal2} title="Ciclo Básico Secundario Técnico">
                                        {yearsData.map(year => (
                                            <div key={year.year}>
                                                <div className="year-header">
                                                    <h2>{year.year}</h2>
                                                </div>
                                                <div className="subjects-container">
                                                    <div className="hour-subject">
                                                        <div className="subjects">
                                                            <h3>Materias</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ marginLeft: subject.hours === 0 ? '20px' : '0' }}>
                                                                        {subject.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="hours">
                                                            <h3>Horas</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ height: '20px' }}>
                                                                        {subject.hours === 0 ? ' ' : subject.hours}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Modal>

                                    <button className="button" onClick={()=> cambiarEstadoModal1(!estadoModal1)}>Materias</button>
                                    <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} title="SECTOR ELECTRÓNICO-EDUCACIÓN TECNICO PROFESIONAL">
                                        {electronicYearsData.map(year => (
                                            <div key={year.year}>
                                                <div className="year-header">
                                                    <h2>{year.year}</h2>
                                                </div>
                                                <div className="subjects-container">
                                                    <div className="hour-subject">
                                                        <div className="subjects">
                                                            <h3>Materias</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ marginLeft: subject.hours === 0 ? '20px' : '0' }}>
                                                                        {subject.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="hours">
                                                            <h3>Horas</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ height: '20px' }}>
                                                                        {subject.hours === 0 ? ' ' : subject.hours}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Modal>

                                    <button className="button" onClick={() => cambiarEstadoModal3(!estadoModal3)}>Materias</button>
                                    <Modal estado={estadoModal3} cambiarEstado={cambiarEstadoModal3} title="SECTOR ELECTROMECÁNICO - EDUCACIÓN TÉCNICO PROFESIONAL">
                                        {electromechanicalYearsData.map(year => (
                                            <div key={year.year}>
                                                <div className="year-header">
                                                    <h2>{year.year}</h2>
                                                </div>
                                                <div className="subjects-container">
                                                    <div className="hour-subject">
                                                        <div className="subjects">
                                                            <h3>Materias</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ marginLeft: subject.hours === 0 ? '20px' : '0' }}>
                                                                        {subject.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="hours">
                                                            <h3>Horas</h3>
                                                            <ul>
                                                                {year.subjects.map(subject => (
                                                                    <li key={subject.name} style={{ height: '20px' }}>
                                                                        {subject.hours === 0 ? ' ' : subject.hours}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="int-map-i">
                        <div className="interes-i">
                            <h1>Áreas de interés</h1>
                            <p>●  AUTOMATIZACIÓN</p>
                            <p>●  AUTOMATIZACIÓN Y CONTROL</p>
                            <p>●  AUTOMATIZACIÓN Y MANTENIMIENTO INDUSTRIAL</p>
                            <p>●  ELECTRICIDAD</p>
                            <p>●  ELECTROMECÁNICA</p>
                            <p>●  ELECTRÓNICA</p>
                            <p>●  ELECTRÓNICA INDUSTRIAL</p>
                            <p>● INDUSTRIAS DE PROCESOS</p>
                            <p>● MECÁNICA INDUSTRIAL</p>
                        </div>
                        <div className="mapp-container">
                            <h1>Ubicación geografica</h1>
                            <Mapp className="mapp" />
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Institucion;
