import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import CadastroUsuario from './pages/Cadastro/Usuario'
import UsuarioEtapa2 from './pages/Cadastro/UsuarioEtapa2'
import RedefinirSenha from "./pages/RedefinirSenha";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro/usuario" element={<CadastroUsuario/>}/>
        <Route path="/cadastro/usuario/etapa2"element={<UsuarioEtapa2/>}/>
        <Route path="/redefinir/senha"element={<RedefinirSenha/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
