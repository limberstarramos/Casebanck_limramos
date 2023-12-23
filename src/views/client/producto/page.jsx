import React from "react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ProductoAction from "./Partials/productoActions"

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



function Producto() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [data_productos, setData_productos] = useState([]);

  useEffect(() => {
    const productos = localStorage.getItem("productos");
    setProductos(JSON.parse(productos));
    // if(productos){
        onloadData();
    // }
  }, []);
  useEffect(() => {
    onloadData();
  }, [productos]);


  const handleDelete = (blogOutIndex) => {
    const _productos = productos.filter((blog, blogInIndex) => {
      if (blogInIndex !== blogOutIndex) {
        return blog;
      }
    });
    console.log(_productos);
    setProductos(_productos);
    localStorage.setItem("productos", JSON.stringify(_productos));
  };

  const handleEdit = (proIndex) => {
    localStorage.setItem("editIndex", proIndex);
    navigate("/producto-edit");
  };
  function onloadData(){
    setData_productos(productos.map((product,index) => {
        return {
            ...product,
            id: index,
            accion: 14
        };

    }))
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
      field: 'descripcion',
      headerName: 'Descripcion',
      width: 150,
      editable: true,
    },
    {
      field: 'accion',
      headerName: 'Accion',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      renderCell: (params) => <ProductoAction {...{ params }} />,
    },

  ];


  return (
    <>
      <div className="content_page p-[1rem]">
        <br />
        <div className="w-[100%] pb-4">
        <Button
          className="float-right"
          onClick={() => {
            navigate("/producto-nuevo");
          }}
          variant="contained"
        >
          Nuevo
        </Button>
        </div> 
        <br />
        <div>
        <DataGrid
        rows={data_productos}
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

        {productos && productos.length > 0
          ? productos.map((blog, proIndex) => {
               return (
                <div key={proIndex}
                  style={{ borderBottom: "1px solid #eee", margin: "10px 0px" }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      minWidth: "200px",
                    }}
                  >
                    {blog?.nombre}{" "}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      minWidth: "280px",
                    }}
                  >
                    {blog?.desc}
                  </span>
                  <EditIcon
                    style={{ color: "blue", minWidth: "50px" }}
                    onClick={() => handleEdit(proIndex)}
                  ></EditIcon>
                  <DeleteIcon
                    style={{ color: "red" }}
                    onClick={() => handleDelete(proIndex)}
                  ></DeleteIcon>
                </div>
              );
            })
          : "sin productos"}
      </div>
    </>
  );
}

export default Producto;
