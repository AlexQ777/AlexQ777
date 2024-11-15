import React, {useEffect} from "react";
import "./Modal.css";

const Modal=({title, children, estado, cambiarEstado})=>{
    useEffect(() => {
        if (estado) {
            document.body.style.overflow = "hidden"; // Desactiva el scroll del body
        } else {
            document.body.style.overflow = "auto"; // Reactiva el scroll del body
        }

        return () => {
            document.body.style.overflow = "auto"; // Asegúrate de reactivar el scroll al desmontar
        };
    }, [estado]);
    return(
        estado &&( 
            <div className="overlay">
                <div className="contenedormodal">
                    <div className="encabezado-modal">
                        <h2>{title}</h2>
                    </div>
                    <div className="botonmodal" onClick={()=> cambiarEstado(false)}>
                        <svg className="iconx" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 
                            5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                    {children}
                    <br/>
                    <button className="botonm" onClick={()=> cambiarEstado(false)}>Cerrar</button>
                </div>
            </div>
        )
        
    )
}

export default Modal