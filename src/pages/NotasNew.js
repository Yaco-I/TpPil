import React,{Fragment,useState} from 'react'
import NewUSer from './User_new'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


const NewNotas = () => {

    
    const [autor, setAutor]= useState('') // No se sabe ya que es una FK
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [nota, setNota] = useState('')

    const [newNota,setNewNota] = useState([])
    


    const validarDatos=(e)=>{
        e.preventDefault()

        if(!titulo.trim()){
            return console.log('El campo titulo esta vacio')
        }
        
        if(!nota.trim()){
            return console.log('El campo nota esta vacio')
        }
        

        console.log('procesando datos...')
        setNewNota([
            ...newNota,
            {titulo: titulo, nota: nota, autor:autor}
        ])
        e.target.reset()
        setTitulo('')
        setNota('')
        setAutor('')
    }

  return (
    <div>
        <h1 className='text-center'>Notas</h1><br/>
        <form onSubmit={validarDatos}>
            <input type={'text'} placeholder='Ingrese Titulo' onChange={(e)=>setTitulo(e.target.value)}/>
            <input type={'text'} placeholder='Ingrese Nota' onChange={(e)=>setNota(e.target.value)}/>
            <Button type='submit' color="primary">Guardar</Button>
        </form>
        {
            newNota.map((item, index)=>(
                <li key={index}> Titulo: {item.titulo} --  Nota : {item.nota} </li>
            ))
        }
    </div>
  )
}

export default NewNotas