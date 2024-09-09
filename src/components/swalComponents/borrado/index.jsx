import { Axiosoptica } from "../../../api";
import { MySwal } from "../../../utils/Swalreact";
import { closeLoadingSwal, LoadingSwal } from "../Loader";
import '../styles.css'
export const borrado = (element) => {
   
    const Borrado = async () => {
    try {
        console.log(element);
        
          LoadingSwal('Borrando turno. Por favor, espere...')
      await Axiosoptica
        .delete(
          "/borrar/" +
          element.id
        )
      closeLoadingSwal()
    element.swalborrado()      
    } catch (error) {
      closeLoadingSwal()
      Algosaliomal('Ocurrio un error al eliminar el turno, intente nuevamente')
    }}


MySwal.fire({
    html: (
        <div className="flex flex-col gap-[20px] overflow-hidden">
            <p className="text-negrotext font-[Inter] text-[28px] font-semibold">
              ¿Está seguro que desea eliminar la orden?
            </p>
        </div>
    ),
    confirmButtonText: (
        <button
            className="border-solid border-2 border-colors-azul bg-colors-rojo text-colors-blanco 
        text-base font-bold font-[inter]
        flex justify-center py-[13px] px-[18px] rounded-boton gap-[10px] w-[100px] mr-3 "
        >
            Eliminar
        </button>
    ),
    showCancelButton: true,
    cancelButtonText: (
        <button
            type="reset"
            className="flex justify-center gap-[10px] py-[13px] px-[18px] border-solid border-2 border-colors-azul rounded-boton bg-colors-blanco
    text-azul font-semibold font-[inter] w-[100px] ml-3"
        >
            Cancelar
        </button>
    ),
    hideClass:true,
    buttonsStyling: false,
}).then((result) =>{
    if (result.isConfirmed) {
       
Borrado()
    }
}).catch((error)=>{
    Algosaliomal('Hubo un error al eliminar el turno. Por favor, intente nuevamente')
})
}
