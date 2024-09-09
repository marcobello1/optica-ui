import React from "react";
import { Axiosoptica } from "../../api";
import { useForm } from "react-hook-form";
import { closeLoadingSwal, LoadingSwal } from "../../components/swalComponents/Loader";
import Swal from 'sweetalert2'

function NuevoUsuario () {
   const { register, handleSubmit, formState: { errors }, watch, reset, clearErrors, control } = useForm()
  const Usuarioregistrado = () => {
    Swal.fire({
      title: 'Usuario registrado',
      icon: 'success'
    })
  }
   const onSubmit = (data) => {
      console.log(data);
      
      const formData = new FormData()
      formData.append('nombre', data.nombre)
      LoadingSwal('Registrando usuario. Por favor, espere...')
      Axiosoptica.post('/administradores/create', data).then(() => {
      closeLoadingSwal()
      Usuarioregistrado()
      
    })
    reset()
    clearErrors()
    }
 return (
   <div className="w-full mt-1 h-[calc(100vh-160px)] overflow-y-auto flex flex-col gap-2">
    <h1 className="text-lime-600 text-[3.15rem] font-bold">Nuevo usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full flex-wrap content-center gap-[35px]"
            >
            <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Nombre</label>
                <input
                  {...register('nombre', {
                    required: true
                  })}
                  type="text"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.nombre?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  id="inputNombre"
                  name="nombre"
                  placeholder="Nombre"
                ></input>
                {errors.nombre?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar un nombre</p>
                )}
              </div>
            
              <div className="flex flex-col self-start items-center md:itemns-start w-[93%] md:gap-[8px]">
                <label className="self-start" htmlFor="inputNombre">Contraseña</label>
                <input
                  {...register('contrasena', {
                    required: true
                  })}
                  type="password"
                  className={`flex flex-row items-center border-solid border-[1px] 
                     ${errors.contrasena?.type === 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
                  w-full rounded-input p-[8px] h-[50px]`}
                  id="inputNombre"
                  name="contrasena"
                  placeholder="Contraseña"
                ></input>
                {errors.contrasena?.type === 'required' && (
                  <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar un contraseña</p>
                )}
              </div>
              <div className="flex w-[93%] justify-center gap-[calc(100%/3)] md:gap-[8%] pb-[3%]">
          <button type="submit" className="border-solid border-2 border-lime-400 bg-lime-400 text-colors-blanco
                 font-semibold font-[inter]
       flex justify-center py-[13px] px-[18px] rounded-boton gap-[4px] w-[calc(100%/3)] md:w-[165px] h-[50px] 
       text-[16px]">
            Agendar
          </button>
          <button  className="border-solid border-2 border-lime-400 600 bg-colors-blanco text-lime-400 
                font-semibold font-[inter]
       flex justify-center py-[13px] px-[18px] rounded-boton gap-[4px] h-[50px] w-[calc(100%/3)] md:w-[206px] 
       text-[16px]"
       onClick={() => {
        reset()
        clearErrors()
       }}>
            Resetear formulario
          </button>
        </div>
            </div>
      </form>
    </div>
 )    
}
export default NuevoUsuario