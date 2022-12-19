import React,{Fragment,useState} from 'react'
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

const NewUSer = () => {

    
    const [nombre, setNombre]= useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [tipo, setTipo] = useState('')
    const [id, setId] = useState('')
    

    const [newUser,setNewUser] = useState([])
    
    const eliminarTarea = id => {
        console.log(id)
    }

    const validarDatos=(e)=>{
        e.preventDefault()

        if(!nombre.trim()){
            return console.log('El campo nombre esta vacio')
        }
        if(!apellido.trim()){
            return console.log('El campo apellido esta vacio')
        }

        if(!email.trim()){
            return console.log('El campo email esta vacio')
        }
        if(!contraseña.trim()){
            return console.log('El campo contraseña esta vacio')
        }
        if(!tipo.trim()){
            return console.log('El campo tipo esta vacio')
        }
        console.log('procesando datos...')
        setNewUser([
            ...newUser,
            {nombre: nombre , apellido: apellido, email:email, contraseña:contraseña, tipo:tipo }
        ])
        e.target.reset()
        setNombre('')
        setApellido('')
        setEmail('')
        setContraseña('')
        setTipo('')
    }

  return (
    <div>
        <h1 className='text-center'>Users</h1><br/>
        <form onSubmit={validarDatos}>
            <input type={'text'} placeholder='Ingrese nombre' onChange={(e)=>setNombre(e.target.value)}/>
            <input type={'text'} placeholder='Ingrese apellido' onChange={(e)=>setApellido(e.target.value)}/>
            <input type={'text'} placeholder='Ingrese email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type={'text'} placeholder='Ingrese contraseña' onChange={(e)=>setContraseña(e.target.value)}/>
            <input type={'text'} placeholder='Ingrese tipo' onChange={(e)=>setTipo(e.target.value)}/>
            
            <Button type='submit' color="primary">Guardar</Button>
        </form>
        {
            newUser.map((item, index)=>(
                <li key={index}> nombre: {item.nombre} --  apellido : {item.apellido} -- email : {item.email} -- contraseña: {item.contraseña} -- tipo: {item.tipo} <tr>
                    <button>Elimnar</button></tr></li>
                
            ))
        }
    </div>
  )
}

export default NewUSer