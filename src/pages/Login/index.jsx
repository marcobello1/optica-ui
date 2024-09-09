import { useForm } from 'react-hook-form'
import logo from '../../assets/logo-1.png'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { Axiosoptica } from '../../api'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { LoadingSwal, closeLoadingSwal } from '../../components/swalComponents/Loader'
function Login() {
    const [showpassword, setShowpassword] = useState()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, watch, reset, clearErrors, control } = useForm()
   
    const error = (msg) => {
        Swal.fire({
          title: 'Advertencia',
          text: msg,
          icon: 'warning'
        })
    }
    const onSubmit = (data) => {
      LoadingSwal('Iniciando sesión. por favor, espere...')
          Axiosoptica.post('/login', data).then((response) => {
      
        if (response.data.msg == 'Usuario no autorizado') {
         closeLoadingSwal()
          error('Usuario no autorizado');
          
        }  else if (response.data.msg == 'Contraseña incorrecta') {
        closeLoadingSwal()
          error('Contraseña incorrecta');
          
        } else {
          closeLoadingSwal()
          localStorage.setItem('admin', response.data.user)
        navigate('/')
        }
        
       }).catch((error) => {
        console.log(error);
        
       })
      }
    return(  
    <div className="h-[100vh] overflow-hidden">
        <div className="h-20 bg-[#c11ed6] justify-center flex gap-[15px] items-center">
          <img src={logo} alt="logo" className="h-[65px]"></img>
          <h1 className="text-white text-[35px] font-extrabold">Bienvenido al sistema de la Óptica Centro</h1>
        </div>
        <div className='flex items-center justify-center h-[calc(100vh-5rem)]'>
            <form className="flex flex-col items-center justify-center w-full h-full gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-lime-600 text-[3.15rem] font-bold">Inicio de sesión</h1>
            <div className="flex flex-col w-[90%] gap-[8px]">
              <label htmlFor="inputNombre">Nombre</label>
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
                  font-[inter] self-start">Debe ingresar su nombre</p>
              )}
            </div>
            <div className="flex flex-col w-[90%] gap-[8px]">
              <label htmlFor="inputNombre">Contraseña</label>
              <div className={`flex flex-row items-center gap-[10px] w-full 
              font-normal text-[1rem] border-solid border-[1px] ${errors.contrasena?.type == 'required' ? 'border-colors-rojo' : 'border-colors-grisinput'}  
              rounded-input p-[8px] h-[50px]`}>
              <input
                {...register('contrasena', {
                  required: true
                })}
                type={showpassword ? 'text' : 'password'}
                className={`flex flex-row items-center border-solid border-[1px] 
                    ${errors.contrasena?.type === 'required' ? 'border-t-colors-rojo border-b-colors-rojo' 
                        : 'border-t-colors-grisinput border-b-colors-grisinput'}  
                 w-full rounded-input p-[8px] h-[50px]`}
                style={{borderRight: 'none', borderLeft:'none'}}
                name="contrasena"
                id="inputContraseña"
                placeholder="Contraseña"
              ></input>
        {showpassword ? (
          <BsEyeSlash onClick={() => {setShowpassword(!showpassword)}} style={{cursor: 'pointer'}}/>
) : (
  <BsEye onClick={() => {setShowpassword(!showpassword)}} style={{cursor: 'pointer'}}/>
      )}
      </div>                     
              {errors.contrasena?.type === 'required' && (
                <p className="text-colors-rojo text-[25px] text-semibold
                  font-[inter] self-start">Debe ingresar su contraseña</p>
              )}
            </div>
            <div className="flex w-[93%] justify-center gap-[calc(100%/3)] md:gap-[8%] pb-[3%]">
          <button type="submit" className="border-solid border-2 border-lime-400 bg-lime-400 text-colors-blanco
                 font-semibold font-[inter]
       flex justify-center py-[13px] px-[18px] rounded-boton gap-[4px] w-[calc(100%/3)] md:w-[165px] h-[50px] 
       text-[16px]">
            Iniciar sesión
          </button>
          </div>
            </form>
        </div>
        </div>
    )
}
export default Login