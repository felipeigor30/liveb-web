import React from 'react'
import Sidebar from '../sidebarMenu'
export default function NotFound() {
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12">
        <header className="text-center pt-2 mt-2 header-custom">Erro 404 - Página não encontrada</header>
        <div className="text-center">
          <h1 style={{ color: 'white' }}>Se estiver com problemas, entre em contato com o suporte.</h1>
        </div>
      </div>
    </>
  )
}
