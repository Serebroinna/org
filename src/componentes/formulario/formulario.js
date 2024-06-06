import "./formulario.css";
import CampoTexto from "../campoTexto/campoTexto.js";
import ListaOpciones from "../listaOpciones/listaOpciones.js";
import Boton from "../boton/boton.js";
import { useState } from "react";

function Formulario( props ){

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [imagen, setImagen] = useState("");
    const [equipo, setEquipo] = useState("Programación");
    const [nombreEquipo, setNombreEquipo] = useState("");
    const [colorEquipo, setColorEquipo] = useState("");

    const manejarEnvio = (e) =>{
        e.preventDefault();
        const data={
            nombre,
            puesto,
            imagen,
            equipo
        };
        props.registrarColaborador(data);
    }

    const manejarEnvioEquipo = (e) =>{
        e.preventDefault();
        props.crearEquipo(nombreEquipo,colorEquipo);

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre.."
                valor={nombre}
                actualizarValor={setNombre}
                required/>

            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto.."
                valor={puesto}
                actualizarValor={setPuesto}
                required/>

            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar url de foto.." 
                valor={imagen}
                actualizarValor={setImagen}
                required/>

            <ListaOpciones valor={equipo} actualizarValor={setEquipo} equipos={props.equipos}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarEnvioEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTexto 
                titulo="Equipo" 
                placeholder="Ingresar nombre.."
                valor={nombreEquipo}
                actualizarValor={setNombreEquipo}
                required/>
            <CampoTexto
                className="input-color"
                type="color"
                titulo="Color" 
                placeholder="Ingresar el color en hexadecimal"
                valor={colorEquipo}
                actualizarValor={setColorEquipo}
                required/>
            <Boton texto="Crear equipo"/>
        </form>        
    </section>
};

export default Formulario;