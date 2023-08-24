import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{

  id: uuid(),  
  nombre: "José Adalid Corea Moradel",
  puesto: "Programador Front-End",
  foto: "https://avatars.githubusercontent.com/u/109826433?s=400&u=443e36b8bae41ab84f7761ccc53f10c350c2d547&v=4",
  equipo: "Front-End",
  fav: true

  },
  {
  id: uuid(),  
  nombre: "Adeline Moradel",
  puesto: "Programadora",
  foto: "https://static.cegos.es/content/uploads/2023/03/01165224/GettyImages-1300321639.jpg",
  equipo: "Data Science",
  fav: false

  }])

  const [equipos, actualizarEquipos] = useState([
    

      {
        id: uuid(),
        titulo:"Programación",
        colorPrimario:"#57c278",
        colorSecundario: "#d9f7e9",
        fav: false
      },
      {
        id: uuid(),
        titulo:"Front-End",
        colorPrimario:"#82cffa",
        colorSecundario: "e8f8ff",
        fav: false
      },
      {
        id: uuid(),
        titulo:"Data Science",
        colorPrimario:"#a6d157",
        colorSecundario: "#f0f8e2",
        fav: false
      },
      {
        id: uuid(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario: "#fde7e8",
        fav: false
      },
      {
        id: uuid(),
        titulo:"UX y Diseño",
        colorPrimario:"#db6ebf",
        colorSecundario: "#fae9f5",
        fav: false
      },
      {
        id: uuid(),
        titulo:"Móvil",
        colorPrimario:"#ffba05",
        colorSecundario: "#fff5d9",
        fav: false
      },
      {
        id: uuid(),
        titulo:"Innovación y Gestión",
        colorPrimario:"#ff8a29",
        colorSecundario: "#ffeedf",
        fav: false
      },
      
  
  
  ])
  
  //Ternario --> {condición ? mostrar : no mostrar}
  
  const cambiarMostrar = () => {
    actualizarFormulario(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
   
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id) 
    actualizarColaboradores(nuevosColaboradores)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()} ])
  }

  const like = (id) => {
    console.log("Like", id)
    const colaboradoresActuliazados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActuliazados)

  }

  const actualizarColor = (color, id) => {

    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

 
  return (
    <div>
      <Header />
      {mostrarFormulario === true ? <Formulario  equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo}
            colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}

          />
        })
      }
      <Footer/>
      
    </div>
  );
}

export default App;
