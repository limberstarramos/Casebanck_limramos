import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Add() {
    const navigate = useNavigate()
    const [nombre, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }

    const handleSubmit = () => {
        console.log({ nombre, desc })

        const _prod = localStorage.getItem('productos') && localStorage.getItem('productos').length > 0 ? JSON.parse(localStorage.getItem('productos')) : []

        localStorage.setItem('productos', JSON.stringify([..._prod, { nombre, desc }]))

        navigate('/producto')
    }

    return (
        <>
         <div className="content_page">
            <Typography className="py-4"> Nuevo Producto </Typography>
            <TextField className="w-[100%] mb-[1rem]" value={nombre} onChange={(e) => handleTitleChange(e)} label="Nombre"  style={{marginBottom:'1rem'}} /> <br />
            <TextField className="w-[100%] mb-[1rem]" value={desc} onChange={(e) => handleDescChange(e)} label="Descripción" style={{marginBottom:'1rem'}}  />   <br />
            <Button className="mt-4" onClick={handleSubmit} variant="contained" > Guardar </Button>
        </div>
        </>
    )
}

export default Add