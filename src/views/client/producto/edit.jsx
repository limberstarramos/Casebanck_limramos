import React,{ useEffect, useState } from "react"
import { Button, TextField, Typography } from "@mui/material"

import { useNavigate } from "react-router-dom"


function Edit() {
    const navigate = useNavigate()
    const [nombre, setTitle] = useState('')
    const [desc, setDesc] = useState('')

  useEffect(() => {
        const idpro = localStorage.getItem('editIndex');
        getEdit();
        // setBlogs(JSON.parse(productos))
    }, [])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    function getEdit(){
        let productos = localStorage.getItem('productos') && localStorage.getItem('productos').length > 0 ? JSON.parse(localStorage.getItem('productos')) : []
        const _producto = productos.map((item, blogInIndex) => {
            if (blogInIndex == localStorage.getItem('editIndex')) {
                setTitle(item.nombre);
                setDesc(item.desc);
                // return { nombre, desc }
            } else {
                return item
            }
        })
    }


    const handleEdit = () => {
        console.log({ nombre, desc, index: localStorage.getItem('editIndex') })
        let productos = localStorage.getItem('productos') && localStorage.getItem('productos').length > 0 ? JSON.parse(localStorage.getItem('productos')) : []

        const _producto = productos.map((item, blogInIndex) => {
            if (blogInIndex == localStorage.getItem('editIndex')) {
                return { nombre, desc }
            } else {
                return item
            }
        })
        console.log(_producto)
        localStorage.setItem('productos', JSON.stringify(_producto))
        navigate('/producto')
    }

    return (
        <>
          <div className="content_page">
            <Typography className="py-4"> Editar Producto </Typography>
            <TextField className="w-[100%]" value={nombre} onChange={(e) => handleTitleChange(e)} label="Nombre" style={{marginBottom:'1rem'}} /> <br />
            <TextField className="w-[100%]" value={desc} onChange={(e) => handleDescChange(e)} label="Description" style={{marginBottom:'1rem'}} />
            <Button onClick={handleEdit} variant="contained" > Guardar </Button>
            <Button onClick={handleEdit} variant="outlined" > Cancelar </Button>
            </div>
        </>
    )
}

export default Edit