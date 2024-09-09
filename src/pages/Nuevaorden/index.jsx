import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Axiosoptica } from "../../api";
import DatosPersonales from "./components/datosPersonales";
import DatosReceta from "./components/datosReceta";
import { LoadingSwal, closeLoadingSwal } from "../../components/swalComponents/Loader";
import Swal from 'sweetalert2'
function NuevaOrden () {
  const [listaMutuales, setListaMutuales] = useState([])
  const { register, handleSubmit, formState: { errors }, watch, reset, clearErrors, control } = useForm()
 useEffect(() => {
  Axiosoptica.get('/listarmutuales').then((response) => {
    setListaMutuales(response.data)
  })
 }, [])
 const registrado = () => {
  Swal.fire({
    title: 'La orden ha sido registrada',
    icon:'success',
    confirmButtonText: 'Aceptar'
  })
 }
  const onSubmit = (data) => {
  LoadingSwal('Registrando, por favor espere...')
  console.log(data.diseniomonofocal);
  
    const formData = new FormData()
    formData.append('nombre', data.nombre)
    formData.append('apellido', data.apellido)
    formData.append('fechanacimiento', data.fechanacimiento)
    formData.append('telefono', data.telefono)
    formData.append('fechareceta', data.fechareceta)
    formData.append('receta', data.receta[0])
    formData.append('mutual', data.mutual)
    formData.append('medico', data.medico)
    formData.append('fecharealizacion', data.fecharealizacion)
    formData.append('armazon', data.armazon)
    formData.append('tipoanteojo', data.tipoanteojo)
    if (data.cristalbifocal) {
      formData.append('tipocristal', data.cristalbifocal)
    }
    if (data.diseniomultifocal) {
     formData.append('tipocristal', data.diseniomultifocal) 
    }
    if (data.diseniomonofocal) {
     formData.append('tipocristal', data.diseniomonofocal) 
      
    }
    if (data.marca) {
      formData.append('marca', data.marca)
    }
    if (data.marcatdigital) {
      formData.append('marca', data.marcatdigital)
    }
   Axiosoptica.post('/crearorden', formData).then(() => {
    closeLoadingSwal()
    registrado()
    
  })
    reset()
    clearErrors()
  }
   return (
    <div className="w-full mt-1 h-[calc(100vh-160px)] overflow-y-auto flex flex-col gap-2">
    <h1 className="text-lime-600 text-[3.15rem] font-bold">Nueva orden</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div
              className="flex flex-col w-full flex-wrap content-center gap-[35px]"
            >
            
              <DatosPersonales 
              register={register}
              errors={errors}
              listaMutuales={listaMutuales}
              />             
              <DatosReceta 
              register={register}
              watch={watch}
              errors={errors}
              listaMutuales={listaMutuales}
        />              
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
export default NuevaOrden