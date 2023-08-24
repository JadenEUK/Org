import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const enviar = (evento) => {
        evento.preventDefault()

        let mostrarEquipo = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(mostrarEquipo)
        
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={enviar}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                valor={nombre} 
                actualizarCampo={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="ingresar Puesto"
                valor={puesto}
                actualizarCampo={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto"
                valor={foto}
                actualizarCampo={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}

            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                valor={titulo} 
                actualizarCampo={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                placeholder="ingresar Color (HEX)"
                valor={color}
                actualizarCampo={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar Equipo"/>

        </form>
    </section>
}

export default Formulario