import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar ({nuevaOrden, setNuevaorden, nuevousuario, setNuevousuario, lista, setLista}) {
   const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-10 h-[calc(100vh-160px)] pt-5 bg-slate-200">
            <div>
                <button className={`${nuevaOrden == true ? 'bg-lime-600' : 'bg-lime-800'}
                 hover:bg-lime-600 text-white pl-20 pr-[10px] pb-[10px] pt-[10px] rounded-r-xl
                text-2xl font-bold w-[95%] text-end`}
                onClick={() =>{setNuevaorden()}}>Nueva orden</button>
            </div>
            <div>
                <button className={`${lista == true ? 'bg-lime-600' : 'bg-lime-800'} 
                hover:bg-lime-600 text-white pl-20 pr-[10px] pb-[10px] pt-[10px] rounded-r-xl
                text-2xl font-bold w-[95%] text-end`}
                onClick={() => {setLista()}}>Lista de ordenes</button>
            </div>
            <div>
                <button className={`${nuevousuario == true ? 'bg-lime-600' : 'bg-lime-800'}
                 hover:bg-lime-600 text-white pl-20 pr-[10px] pb-[10px] pt-[10px] rounded-r-xl
                text-2xl font-bold w-[95%] text-end`}
                onClick={() => {setNuevousuario()}}>Nuevo usuario</button>
            </div>
            <div>
                <button className={`${nuevousuario == true ? 'bg-lime-600' : 'bg-lime-800'}
                 hover:bg-lime-600 text-white pl-20 pr-[10px] pb-[10px] pt-[10px] rounded-r-xl
                text-2xl font-bold w-[95%] text-end`}
                onClick={() => {
                    localStorage.removeItem('admin')
                    navigate('/login')}}>Cerrar sesión</button>
            </div>
        </div>
    )
}
export default Navbar