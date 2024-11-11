import './App.css'
import Card from './components/Card'
import EmblaCarousel from './components/Carousel'
import proyectos from './components/data/Proyectos';
import Header from './components/Encabezado.jsx';
import Footer from './components/Footer.jsx'
import React from 'react';


function App() {
  const proyectosList = proyectos.map(v=>{
    return <Card title={v.name} description={v.description}/>
  })
  return (
    <div className='app-a'>
      <Header/>
      <div className='content-a'>
        <div className='carousel-a'>
          <EmblaCarousel/>
        </div>
        <div className='cont-a'>
        <Card title="Institución" path="Institución"/>
        <Card title="Técnicaturas" path="Técnicaturas"/>
        <Card title="Proyectos" path="Proyectos"/>
        </div>
        <div className='texto-a'>
          <h1>Bienvenidos a la Escuela Ingeniero Guillermo Villanueva</h1>
          <h2 className='fff-a'>"DÉCADAS DE EXCELENCIA TÉCNICA FORMANDO A LAS NUEVAS GENERACIONES"</h2>
          <br/>
          <p>
            La Escuela Ingeniero Villanueva es una institución con una larga trayectoria en la educación 
            técnica dedicada a formar jóvenes con los conocimientos y habilidades para enfrentar los desafíos
            del mundo moderno.
          </p>
          <br/>
          <p>
            Ofrecemos una educación de calidad que integra teoría y práctica con una variedad de técnicaturas
            y proyectos innovadores.
          </p>
          <br/>
          <p>
            Nuestra misión es construir un futuro brillante a través de la excelencia técnica y la formación 
            de nuevos líderes.
          </p>
        </div>
        <div className='m-v-v-a'>
          <div className='mision-a'>
            <h1>Misión</h1>
            <p>
            Formación técnica integral y de calidad, promoviendo el desarrollo académico y personal de los estudiantes.
            </p>
          </div>
          <div className='vision-a'>
            <h1>Visión</h1>
            <p>
            Ser una institución educativa de referencia, reconocida por su calidad y compromiso social.
            </p>
          </div>
          <div className='valor-a'>
            <h1>Valor</h1>
            <p>
            Excelencia, responsabilidad social, ética, innovación, trabajo en equipo y respeto por la diversidad.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
