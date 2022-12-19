import React from "react";
import { useState } from "react";

const Login=()=>{

    const [email , setEmail]=useState('')
    const [contraseña , setContraseña]=useState('')
    const [users,setUsaers]=useState('')
    
    const cargarEmail=(e)=>{
        e.preventDefault()
        if(!email.trim()){
            console.log('Esta vacio email')
            return
        }
        
        if(!contraseña.trim()){
            console.log('Esta vacio contraseña')
          }
        console.log('procesandio datos')
        
        setContraseña('')
        setEmail('')

    }

    







    return (
        <div>
            <h1 className="text-center">Login de Note Nota</h1>  
            <form onSubmit={cargarEmail}>
                <input
                    type="text"
                    placeholder="Ingrese email"
                    className="form-control mb-2"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <input 
                    type="text"
                    placeholder="Ingrese contraseña"
                    className="form-control mb-2"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                <button className="btn btn-primary btn-block" type="submit"> Ingresar </button>
            </form>
        </div>
    )
}

export default Login;