
import React from "react";
import {
    Button,
    TextField,
    Typography,
    Input,
    InputLabel,
  } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TarjetaActios from "./Partials/tarjetaActions"

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function TarjetaAprobada() {
  const navigate = useNavigate();
  const [tarjetas, setTarjetas] = useState([]);
  const [data_tarjetas, setData_tarjetas] = useState([]);

  useEffect(() => {
    const tarjetas = localStorage.getItem("tarjetas");
    setTarjetas(JSON.parse(tarjetas));
    // if(tarjetas){
        onloadData();
    // }
  }, []);
  useEffect(() => {
    onloadData();
  }, [tarjetas]);


  function onloadData(){
    if(tarjetas!==null && tarjetas.length>0){
        
        setData_tarjetas(tarjetas.filter((tarjet,index) => {
            console.log(tarjet)
            if(tarjet.aprobado===true){
                return tarjet;
            }
            // return tarjet;
    
        }));
     
    }

  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 150,
      editable: true,
    },
    {
      field: 'documento_identidad',
      headerName: 'Documento Identidad',
      width: 150,
      editable: true,
    },
    {
        field: 'correo_electronico',
        headerName: 'Correo Electrónico ',
        width: 150,
        editable: true,
      },
      {
        field: 'telefono',
        headerName: 'Teléfono',
        width: 150,
        editable: true,
      },


  ];
//  renderCell: (params) => <TarjetaActios {...{ params }} />,

  return (
    <>
      <div className="content_page p-[1rem] pt-4">
      <Typography className="py-4 text-center">
          Tarjeta Aprobadas
        </Typography>

        <div>
        <DataGrid
        rows={data_tarjetas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        disableRowSelectionOnClick
      />
        </div>

      
      </div>
    </>
  );
}

export default TarjetaAprobada;
