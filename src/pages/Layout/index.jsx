import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import logo from '../../assets/logo-1.png'
import { FaInstagram,  FaPhone} from "react-icons/fa";
const Layout = ({ children, nuevaOrden, setNuevaorden, nuevousuario, setNuevousuario, lista, setLista}) => {
  return (
    <div className="h-[100vh] overflow-hidden">
    <div className="h-20 bg-[#c11ed6] justify-center flex gap-[15px] items-center">
      <img src={logo} alt="logo" className="h-[65px]"></img>
      <h1 className="text-white text-[35px] font-extrabold">Panel de control</h1>
    </div>
    <div className="flex gap-[50px]">
      <Navbar 
      nuevaOrden = {nuevaOrden}
      setNuevaorden = {() => {
        setNuevaorden()
      }}
      nuevousuario ={nuevousuario}
      lista = {lista}
      setNuevousuario = {() => setNuevousuario()}
      setLista = {() => setLista()}
      />
      <div className="w-full">
      {children ? children : <Outlet />}
      </div>
    </div>
      <div className="h-[80px] bg-[#c0bfbf] flex flex-col justify-center items-center font-bold">
        <h1>Mitre 189, San Nicolás de los Arroyos</h1>
       <div className="flex gap-2">
        <FaPhone className="ssize-[40px]"/>
       <h1 className="font-bold">0336 4428077</h1>
       <a href="https://www.instagram.com/opticacentro.sn/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="size-[40px] text-[#E1306C]" />
        </a>
        </div> 
      </div>
    </div>
  );
};
export default Layout