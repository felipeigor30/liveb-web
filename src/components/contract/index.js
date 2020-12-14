import React, { useState } from 'react'

import Sidebar from '../sidebarMenu'
import { Button } from 'react-bootstrap'
import { RiWhatsappFill } from 'react-icons/ri'
export default function Contract() {




  return (
    <>
      <Sidebar />
      <div id="main-container" className="main-container col-xs-12 p-2">

        <header className="text-center pt-2 mt-2 header-custom">Contrato</header>
        <div className="pl-5 pr-5 pb-3">
          <div className="mb-3">
            <h2 className="title-h2-plan" style={{ fontSize: '25px', fontWeight: 'bold' }}>Não deixe de assinar seu contrato, peça-o agora</h2>
            <h4 className="description-h4-plan">
              Usuário que passam do prazo de assinatura do contrato que é de até 2 dias uteis, podem ter a conta excluida de nossa base de dados.
              </h4>
            <div className="justify-content-center">
              <div className="row">
                <div className="col text-center m-3">
                  <h2 style={{ color: 'white' }}>Peça agora pelo whatsapp</h2>
                  <a href="https://web.whatsapp.com/send?phone=5516997040044" className='btn btn-contract p-2 justify-content-center align-items-center'><RiWhatsappFill style={{ fontSize: '2rem', marginLeft: '10px', marginRight: '10px' }} /></a>
                </div>
              </div></div>
          </div>
        </div>
      </div>
    </>
  )
}
