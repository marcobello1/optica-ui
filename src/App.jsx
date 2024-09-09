import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Welcome  from "./pages/Welcome";
import Layout from './pages/Layout'
import NuevaOrden from './pages/Nuevaorden'
import NuevoUsuario from './pages/Nuevousuario'
import ListaOrdenes from './pages/Listaordenes'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/Login'
import PrivateRouter from './components/privateRouter'
function App() {
const [nuevaOrden, setNuevaorden] = useState(false)
const [nuevousuario, setNuevousuario] = useState(false)
const [lista, setLista] = useState(false)
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={
        <PrivateRouter>
        <Layout 
      nuevaOrden = {nuevaOrden}
      setNuevaorden = {() => {
        setNuevaorden(true)
        setLista(false)
        setNuevousuario(false)
      }}
      nuevousuario = {nuevousuario}
      setNuevousuario = {() => {
        setNuevaorden(false)
        setLista(false)
        setNuevousuario(true)
      }}
      lista = {lista}
      setLista = {() =>{
        setNuevaorden(false)
        setLista(true)
        setNuevousuario(false)
      }}
      />
      </PrivateRouter>}>
      
      <Route index element={<div>
        {nuevaOrden == true ? <NuevaOrden /> :
        nuevousuario == true ? <NuevoUsuario /> :
        lista == true ? <ListaOrdenes /> :
        <Welcome />
        }
          
      </div>}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
