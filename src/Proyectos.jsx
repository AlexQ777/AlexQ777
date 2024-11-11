import Header from "./components/Encabezado";
import Footer from "./components/Footer";
import './Proyectos.css'
import Item from "./components/item";
import Item2 from "./components/Item2";
import parlante from "./components/img/parlantex.jpg"
import interruptor from "./components/img/interruptor.jpg";
import autito from "./components/img/autito.jpg";
import reloj from "./components/img/reloj.jpg";
import carretilla from "./components/img/carretilla.jpg";
import parrilla from "./components/img/parrilla.jpg";
import destellador from "./components/img/destellador.jpg";
import alargue from "./components/img/alargue.jpg";
import instalacion from "./components/img/instalacion.jpg";
import entrecielos from "./components/img/entrecielos.jpg";

function Proyectos(){
    return(
        <div className="proyectos">
            <Header/>
            <div className="content-p">
                <h1>Proyectos</h1>
                <div className="proyectos-ciclo-basico">
                    <h2 className="tit"> Ciclo basico</h2>
                    <div className="contenedor-proyectos-ciclo-basico">
                        <Item2
                            image={carretilla}
                            title="Carretilla de madera"
                            description="Carretilla de madera hecha a mano, ideal para transportar cargas ligeras en el jardin o en la casa."
                        />
                        <Item
                            image={parrilla}
                            title="Juego de herramientas para asado"
                            description="Juego de herramientas para asado que incluye pinzas, espátula y tenedor, diseñadas para facilitar la preparación y el manejo de la parrilla."
                        />
                        <Item2
                            image={destellador}
                            title="Destellador"
                            description="Circuito de LED intermitente basado en un temporizador 555, que permite crear parpadeos ajustables en la intensidad y frecuencia de la luz."
                        />
                        <Item
                            image={instalacion}
                            title="Instalación eléctrica básica"
                                description="Montaje de un circuito simple con interruptores y bombillas."
                        />
                        <Item2
                            image={alargue}
                            title="Alargador con indicador LED"
                            description="El alargador diseñado incluye un sistema de indicadores LED para mostrar el estado de la conexión eléctrica."
                        />
                    </div>
                </div>
                <div className="proyectos-area-electronica">
                    <h2 className="tit">Sector Electrónica</h2>
                    <div className="contenedor-proyectos-electronica">
                        <Item
                            image={parlante}
                            title="Parlante Bluetooth"
                            description="Parlante Bluetooth casero diseñado para reproducir música de forma inalámbrica, utilizando componentes electrónicos básicos."
                        />
                        <Item2
                            image={interruptor}
                            title="Interruptor activado por sonido"
                            description="Interruptor activado por sonido que enciende o apaga un dispositivo al detectar un ruido o un aplauso."
                        />
                        <Item
                            image={autito}
                            title="Coche controlado por Bluetooth con arduino"
                            description="Coche controlado por Bluetooth con arduino, que permite manejar sus movimientos de forma inalámbrica desde un dispositivo móvil."
                        />
                        <Item2
                            image={reloj}
                            title="Reloj digital con arduino"
                            description="Reloj digital basado en Arduino que muestra la hora en una pantalla utilizando un módulo de tiempo real."
                        />
                    </div>
                </div>
                <div className="proyectos-area-electromecanica">
                    <h2 className="tit">Sector Electromecánica</h2>
                    <div className="contenedor-proyectos-electromecanica">
                        <Item
                            image={entrecielos}
                            title="Silla de ruedas"
                            description="En colaboración con la fundación EntreCielos, los chicos del sector electromecánica llevaron a cabo un proyecto dedicado a la restauración de sillas de ruedas."
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Proyectos;