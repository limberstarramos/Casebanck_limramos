import {
  Button,
  TextField,
  Typography,
  Input,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import "../../../styles/form_style.css";
import { useForm } from "react-hook-form";
function SolicitudTarjeta() {
  const navigate = useNavigate();
  const [nombre, setTitle] = useState("");
  const [documento_identidad, setDocumento_identidad] = useState("");
  const [correo_electronico, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const messages = {
    required: "Este campo es obligatorio",
    minLength: "No puede ingresar menor caracteres de lo establecido",
    maxLength: "No puede ingresar más caracteres en este campo",
    espacioBlanco: "No es permitido espacios en blanco",
    aceptaLetra: "Solo se acepta letras en este campo",
  };
  const patterns = {
    espacioBlanco: /^(?!\s)/,
    aceptaLetra: /^[A-Za-z\s]+$/,
  };
  const onSubmit = async (data) => {
    console.log(data);

    const datos = {
      nombre: data.nombre,
      documento_identidad: data.documento_identidad,
      correo_electronico: data.correo_electronico,
      telefono: data.telefono,
      aprobado:false
    };
    const tarjets =
      localStorage.getItem("tarjetas") &&
      localStorage.getItem("tarjetas").length > 0
        ? JSON.parse(localStorage.getItem("tarjetas"))
        : [];
    localStorage.setItem("tarjetas", JSON.stringify([...tarjets, datos]));
    navigate("/tarjetas-solicitadas");
  };

  return (
    <>
      <div className="content_page p-[1rem]">
        <Typography className="py-4 text-center">
          Solicitud de Tarjeta de Crédito
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content_form w-[100%]">
            <div className="flex items-center  flex-wrap gap-[1rem] mb-[1rem]">
              <InputLabel htmlFor="my-input" className="md:w-[20%]">
                Nombre
              </InputLabel>
              <div className="md:w-[70%] responsive_movil">
                <input
                  type="text"
                  name="nombre"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: messages.required,
                    },
                    minLength: {
                      value: 1,
                      message: messages.minLength,
                    },
                    maxLength: {
                      value: 50,
                      message: messages.maxLength,
                    },
                    pattern: {
                      value: patterns.espacioBlanco,
                      message: messages.espacioBlanco,
                    },
                    pattern: {
                      value: patterns.aceptaLetra,
                      message: messages.aceptaLetra,
                    },
                  })}
                />
                {errors.nombre && (
                  <small className="text-red-600">
                    {errors.nombre.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex items-center  flex-wrap gap-[1rem] mb-[1rem]">
              <InputLabel htmlFor="my-input" className="md:w-[20%]">
                Documento de identidad
              </InputLabel>
              <div className="md:w-[70%] responsive_movil">
                <input
                  type="text"
                  name="documento_identidad"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("documento_identidad", {
                    required: {
                      value: true,
                      message: messages.required,
                    },
                    minLength: {
                      value: 1,
                      message: messages.minLength,
                    },
                    maxLength: {
                      value: 50,
                      message: messages.maxLength,
                    },
                    pattern: {
                      value: patterns.espacioBlanco,
                      message: messages.espacioBlanco,
                    },
                  })}
                />
                {errors.documento_identidad && (
                  <small className="text-red-600">
                    {errors.documento_identidad.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex items-center  flex-wrap gap-[1rem] mb-[1rem]">
              <InputLabel htmlFor="my-input" className="md:w-[20%]">
                Correo Electrónico
              </InputLabel>
              <div className="md:w-[70%] responsive_movil">
                <input
                  type="email"
                  name="correo_electronico"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("correo_electronico", {
                    required: {
                      value: true,
                      message: messages.required,
                    },
                    minLength: {
                      value: 1,
                      message: messages.minLength,
                    },
                    maxLength: {
                      value: 50,
                      message: messages.maxLength,
                    },
                    pattern: {
                      value: patterns.espacioBlanco,
                      message: messages.espacioBlanco,
                    },
                  })}
                />
                {errors.correo_electronico && (
                  <small className="text-red-600">
                    {errors.correo_electronico.message}
                  </small>
                )}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-[1rem] mb-[1rem]">
              <InputLabel htmlFor="my-input" className="md:w-[20%]">
                Teléfono
              </InputLabel>
              <div className="md:w-[70%] responsive_movil">
                <input
                  type="text"
                  name="telefono"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("telefono", {
                    required: {
                      value: true,
                      message: messages.required,
                    },
                    minLength: {
                      value: 1,
                      message: messages.minLength,
                    },
                    maxLength: {
                      value: 50,
                      message: messages.maxLength,
                    },
                    pattern: {
                      value: patterns.espacioBlanco,
                      message: messages.espacioBlanco,
                    },
                  })}
                />
                {errors.telefono && (
                  <small className="text-red-600">
                    {errors.telefono.message}
                  </small>
                )}
              </div>
            </div>
          </div>

          <Button type="submit" className="mt-4" variant="contained">
            Guardar
          </Button>
        </form>
      </div>
    </>
  );
}

export default SolicitudTarjeta;
