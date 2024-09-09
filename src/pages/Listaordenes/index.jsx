import React, { useEffect, useState } from "react";
import { Axiosoptica } from "../../api";
import { FaEye, FaArrowLeft, FaTrash } from "react-icons/fa";
import { closeLoadingSwal, LoadingSwal } from "../../components/swalComponents/Loader";
import { borrado } from "../../components/swalComponents/borrado";
import  Swal  from "sweetalert2";
import { CgIfDesign } from "react-icons/cg";
function ListaOrdenes () {
   const [ordenes, setOrdenes] = useState([])
   const [detalle, setDetalle] = useState(false)
   const [armazon, setArmazon] = useState('')
      useEffect(() => {
      LoadingSwal('cargando ordenes. por favor, espere...')
      Axiosoptica.get('/listaordenes').then((response) => {
         setOrdenes(response.data);
         closeLoadingSwal()
      })
}, [])
const borradoexitoso = () => {
   Swal.fire({
      title: 'Borrado exitosamente',
      icon: 'success',
      confirmButtonText: 'Aceptar',
   }).then(() => {
      LoadingSwal('cargando ordenes. por favor, espere...')
      Axiosoptica.get('/listaordenes').then((response) => {
         setOrdenes(response.data);
         closeLoadingSwal()
      })
   })
}
const getDetalle = (id) => {
   LoadingSwal('Cargando detalle de la orden. Por favor, espere...')
   Axiosoptica.get('/detalleorden/' + id).then((response) => {
      setDetalle(response.data);
      closeLoadingSwal()

   seteararmazon(response) 
      })
}
const seteararmazon = (response) => {

  let armazones = response.data.armazon.split(',')  
  
  setArmazon(armazones)
}



const eliminar = (id) => {
   
   borrado({id: id, swalborrado: borradoexitoso})
   
}
const recetaURL = `${detalle.receta}`
return(
   <div>
      {detalle !== false ? (
           <div className="w-full mt-1 h-[calc(100vh-160px)] overflow-y-auto flex flex-col gap-2">
           <div className="flex gap-2 items-center">
            <FaArrowLeft 
            size='32px'
            color="#64a30d"
            className="cursor-pointer"
            onClick={() => setDetalle(false)}
            />
           <h1 className="text-lime-600 text-[3.15rem] font-bold">Detalle de la orden</h1>
           </div>
            <div className="ml-20">
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Nombre: </p>
               <p className="text-[30px]">{detalle.nombre}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Apellido: </p>
               <p className="text-[30px]">{detalle.apellido}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Teléfono: </p>
               <p className="text-[30px]">{detalle.telefono}</p>
            </div>

            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Fecha de nacimiento: </p>
               <p className="text-[30px]">{detalle.fechanacimiento}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Fecha de receta: </p>
               <p className="text-[30px]">{detalle.fechareceta}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Fecha de realización: </p>
               <p className="text-[30px]">{detalle.fecharealizacion}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Médico: </p>
               <p className="text-[30px]">{detalle.medico}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Mutual: </p>
               <p className="text-[30px]">{detalle.mutuales.nombre}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Tipo de anteojo: </p>
               <p className="text-[30px]">{detalle.tipoanteojo}</p>
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Armazón: </p>
              {armazon.length > 1 ? (<p className="text-[30px]">{armazon[0]} - {armazon[1]}</p>)
              : (<p className="text-[30px]">{armazon}</p>)}
            </div>
            <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Tipo de cristal: </p>
               <p className="text-[30px]">{detalle.tipocristal == 'talladodigital'? 'Tallado digital' :
                 detalle.tipocristal == 'bignorm' ? 'BIG NORM' : detalle.tipocristal }</p>
            </div>
            {
               detalle.marca && (
                  <div className="flex gap-6">
               <p className="text-[30px] font-extrabold">Marca: </p>
               <p className="text-[30px]">{detalle.marca}</p>
            </div>

               )
            }
            <div className="flex gap-6 items-center">
               <p className="text-[30px] font-extrabold">Receta: </p>
               <img src={recetaURL} className="w-[100px]"></img>
            </div>
            </div>
           </div>    
      ): (
         <div className="w-full mt-1 h-[calc(100vh-160px)] overflow-y-auto flex flex-col gap-2">
         <h1 className="text-lime-600 text-[3.15rem] font-bold">Lista de ordenes</h1>
         {ordenes?.length > 0 ? (
              <table className="w-full rounded-[12px] max-h-[95%] bg-lime-400">
              <tbody>
                 {ordenes?.map((value,key) => {
                    return(
                       <tr className="flex flex-row justify-between items-center w-full py-[7px] px-[30px] border-b-2"
                       key={value.id}
                       style={{borderBottom:'1px solid #d2d2d2 !important'}}>
                          <td className="mr-[2%] flex flex-col items-start gap-[12px] w-[106px] h-[111px]">
                             <p className="font-bold font-[inter] text-[19px]">Nombre</p>
                             <p className="font-[inter] font-bold text-[16px]">{value.nombre}</p>
                           </td>
                           <td className="mr-[2%] flex flex-col items-start gap-[12px] w-[106px] h-[111px]">
                             <p className="font-bold font-[inter] text-[19px]">Apellido</p>
                             <p className="font-[inter] font-bold text-[16px]">{value.apellido}</p>
                           </td>
                           <td className="mr-[2%] flex flex-col items-start gap-[12px] w-[106px] h-[111px]">
                             <p className="font-bold font-[inter] text-[19px]">Fecha de realización</p>
                             <p className="font-[inter] font-bold text-[16px]">{value.fecharealizacion}</p>
                           </td>
                           <td className="mr-[2%] flex flex-col items-start gap-[12px] w-[106px] h-[111px]">
                             <p className="font-bold font-[inter] text-[19px]">Fecha de receta</p>
                             <p className="font-[inter] font-bold text-[16px]">{value.fechareceta}</p>
                           </td>
                           <td className="flex flex-col items-start gap-[12px] w-[106px] h-[111px] ml-[3%]">
                             {" "}
                             <p className="font-bold font-[inter] text-[19px]">Acciones</p>
                             <div className="flex flex-row items-center h-[36px] gap-[12px]">
                                <FaEye 
                                className="cursor-pointer"
                                onClick={() => {
                                 getDetalle(value.id)
                                }}
                                />
                                <FaTrash 
                                className="cursor-pointer"
                                onClick={() => {
                                 eliminar(value.id)
                                }}
                                />
                             </div>
                             </td>
                       </tr>
                    )
                 })}
              </tbody>
           </table>
           ) : <p className="text-lime-600 text-[3.15rem] font-bold">Ups! No hay nada aquí</p>}
     
         </div>
     
      )}
   </div>
)
}
export default ListaOrdenes