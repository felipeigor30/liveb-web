import React from 'react'
import Sidebar from '../sidebarMenu'

export default function Support() {
  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12 p-2">
        <header className="text-center pt-2 mt-2 header-custom">Suporte</header>
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan" style={{ fontSize: '25px', fontWeight: 'bold' }}>Dúvidas? Entre em contato</h2>
            <h4 className="description-h4-plan">Email: contato@livebinvestimentos.com.br</h4>
            <h4 className="description-h4-plan">Telefone: (16) 3600-8616 </h4>
            <h4 className="description-h4-plan">Whats: (16) 99704-0044 </h4>
          </div>
        </div>
      </div>
    </>
  )
}
