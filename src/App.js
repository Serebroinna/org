import { useState } from "react";
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg/miOrg.js';
import Equipo from "./componentes/equipo/equipo.js";
import Footer from "./componentes/footer/footer.js";

function App() {

  // Estado para mostrar o ocultar el formulario
  const [mostrarFormulario, actualizaMostrar] = useState(false);
  const cambiarState = () => {
    actualizaMostrar(!mostrarFormulario);
  }

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front-end",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  // Registrar colaborador 
  const [colaboradores, setColaborador] = useState([
    {
      id: uuid(),
      equipo: "Front-end",
      imagen: "https://github.com/Serebroinna.png",
      nombre: "Ivan Beltran",
      puesto: "Frontend developer jr",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      imagen: "https://github.com/Serebroinna.png",
      nombre: "Omar Herrera",
      puesto: "Java developer",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      imagen: "https://github.com/Serebroinna.png",
      nombre: "Margarita Savala",
      puesto: "UX desinger",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front-end",
      imagen: "https://github.com/Serebroinna.png",
      nombre: "Harland Lora",
      puesto: "React developer",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      imagen: "https://github.com/Serebroinna.png",
      nombre: "Leonardo Lopez",
      puesto: "Data science analytics",
      fav: true
    },
  ]);
  const registrarColaborador = (colaborador) =>{
    //Spread operator copia los valores actuales de una lista y agrega el nuevo valor 
    setColaborador([...colaboradores, colaborador]);
  }

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevaListaColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id);
    setColaborador(nuevaListaColaboradores);
  }

  // Actializar color del equipo
  const actualizarColor = (color,id) => {
    const colorActualizado = equipos.map((e) => {
      if(id === e.id){
        e.colorPrimario = color;
        e.colorSecundario = color;
      }
      return e;
    })
    setEquipos(colorActualizado);
  }

  // Crear un nuevo equipo
  const crearEquipo = (nombreEquipo,colorEquipo) => {
    console.log(nombreEquipo,colorEquipo)
    const obj = {
      id: uuid(),
      titulo: nombreEquipo,
      colorPrimario: colorEquipo
    };
    setEquipos([...equipos, obj]);
  }
  
  // Añador favorito
  const favorito = (id) => {
    const coloboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    setColaborador(coloboradoresActualizados);
  }
 

  return (
    <div>
      <Header />
      {/* vamos a usar un operador ternario para condicionar la aparicion del formulario, la sintaxis es:
      condicion ? formulario : noMuestraNada
      se traduce a si ("?") la condicion se cumple muestra el formulario, si no (":") muestra un div vacio. */}
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/> : <></> }
      <MiOrg cambiarState={cambiarState}/>
      {equipos.map((equipo,index)=>{
        return <Equipo datos={equipo} 
                key={index} 
                colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                eliminarColaborador={eliminarColaborador}
                actualizarColor={actualizarColor}
                favorito={favorito}/>
      })};
      <Footer />
    </div>
  );
}

export default App;
